import BugReport from "@material-ui/icons/BugReport";
import withStyles from "@material-ui/core/styles/withStyles";

import React, { Component } from 'react';

import classNames from 'classnames';
import {EnhancedTable} from 'views/Attendance/table_with_checkbox';
import CardFooter from "components/Card/CardFooter.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

function getData(url = ``, data = {}) {
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: { "Content-Type": "application/json", },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
        .then(response => response.json()); // parses response to JSON
}
function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.text()); // parses response to JSON
  }
  
export default class Attendance extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        this.state = {
            data: [],
            isJB: false,
            name: false,
            selectALL: false,
            unselectALL: true,
            checked: false,
            date: date,
            fname:'',
            mname:'',
            lname:'',
        }
        this.toggleChangeSelectALL = this.toggleChangeSelectALL.bind(this);
        this.unToggleChangeSelectALL = this.unToggleChangeSelectALL.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateInput3 = this.updateInput3.bind(this);
      //  this.updateInputf = this.updateInputf.bind(this);
        this.updateInput = this.updateInput3.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
       // this.onFieldNameChange=this.onFieldNameChange.bind(this);
    }
    //onFieldNameChange = (e) => {
    //    this.setState({  fname: e.target.value });
    //  }
    handleSubmit=(e)=>{
        e.preventDefault();
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Attendance/insert.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    }
    updateInput = (event) => {
       // let state = {};
      //  state[event.target.name] = event.target.value;
      //  this.setState(state);
      //  console.log(this.state);
    }
    updateInput3 = (event) => {
        let d = event.target.value;
        this.setState({
            date: d,
        });
    }
  /* updateInputf = (event) => {
        
        let state = {};
        state[event.target.name] = this.refs.aya.value;
        this.setState(state);
        console.log(this.state);
    }*/
    onChange(e) {
        const { checked } = e.target.value;
        this.setState({ checked });
    }
    toggleChangeSelectALL = () => {
        this.setState(prevState => ({
            checked: !prevState.selectALL,
        }));
    }
    unToggleChangeSelectALL = () => {
        this.setState(prevState => ({
            checked: !prevState.unselectALL,
        }));
    }
    handleClick = (e) => {
        e.preventDefault();
        let checked = e.target.value;
        console.log(checked);
        this.setState(({
            isJB: checked,
        }));
    }

    componentDidMount() {
        var th = this;
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Attendance/gets.php`)
            .then(function (event) {
                th.setState({ data: event });
            })
    }
    search = (event) => {
        event.preventDefault();
        if (event.target.value) {
            let filtered = this.state.data.filter(item => {
                return (
                    item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.lname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.id.toLowerCase().includes(event.target.value.toLowerCase())
                );
            });
            this.setState({
                ...this.state,
                searchString: event.target.value,
                data: filtered
            });
        } else {
            this.setState({
                ...this.state,
                data: this.state.data,
                searchString: "",
            });
            setTimeout(() => { this.componentDidMount(); }, 50);
        }
    };
    render() {
        const { searchString } = this.state;
        const style11 = { alignContent: "Left", width: "100%", color: "#000", margin: "3px 0", height: "30px", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" };
        return (
            <div style={{ alignContent: "Center" }}>

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={10}>
                        <CustomTabs
                            title=""
                            headerColor="info"
                            tabs={[
                                {
                                    tabName: "Attendance",
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={12}>
                                                <div className="Table">
                                                    <input
                                                        style={style11}
                                                        type="search"
                                                        value={searchString}
                                                        onChange={this.search}
                                                        placeholder="Search"
                                                    />

                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="checkbox"
                                                                checked={this.state.selectALL}
                                                                onChange={this.toggleChangeSelectALL}
                                                                className="form-check-input"
                                                            />
                                                            Select All
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox"
                                                                checked={this.state.unselectALL}
                                                                onChange={this.unToggleChangeSelectALL}
                                                                className="form-check-input"
                                                            />
                                                            Un Select All
                                                        </label>
                                                    </div>
                                                    <center>
                                                        <form action="insert.php" onSubmit={this.handleSubmit}>
                                                            <table style={{ background: "white", border: " 1px solid pink" }} onChange={this.props.get}>
                                                                <thead style={{ border: " 5px solid black", background: "pink" }}>
                                                                    <tr>
                                                                        <td>First Name</td>
                                                                        <td>Mid Name</td>
                                                                        <td>Last Name</td>
                                                                        <td>ID</td>
                                                                        <td>Class</td>
                                                                        <td>Class ID</td>
                                                                        <td>Date</td>
                                                                        <td>Absence</td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        this.state.data.map((item, i) =>
                                                                            <tr key={i}>
                                                                            {/*<td onChange={this.updateInput}>    {item.name}</td>*/}
                                                                                <td>
                                                                                    <input style={{ width: "70%" }} type="text" key="fname" name="fname" defaultValue={item.name}
                                                                                     //ref="aya"
                                                                                   //  readOnly={(event) => {
                                                                                    //        let state = {};
                                                                                    //          state[event.target.name] =item.name ;
                                                                                     //         this.setState(state); 
                                                                                     //   }}
                                                                                      // onChange={this.onFieldNameChange}
                                                                                     >
                                                                                    </input>
                                                                                 </td>

                                                                                {/*<td>{item.mname}</td>*/}
                                                                                <td>
                                                                                    <input style={{ width: "75%" }} type="text" key="mname" name="mname" defaultValue={item.mname}   onChange={this.updateInput}>
                                                                                    </input>
                                                                                </td>

                                                                                {/* <td>{item.lname}</td>*/}
                                                                                <td>
                                                                                    <input style={{ width: "77%" }} type="text" key="lname" name="lname" defaultValue={item.lname}   onChange={this.updateInput}>
                                                                                    </input>
                                                                                </td>
                                                                                {/*<td>{item.id}</td>*/}
                                                                                <td>
                                                                                    <input style={{ width: "77%" }} type="text" key="id" name="id" defaultValue={item.id}   onChange={this.updateInput}>
                                                                                    </input>
                                                                                </td>
                                                                                {/* <td>{item.level}</td>*/}
                                                                                <td>
                                                                                    <input style={{ width: "77%" }} type="text" key="level" name="level" defaultValue={item.level}  onChange={this.updateInput}>
                                                                                    </input>
                                                                                </td>
                                                                                {/*<td>9A</td>*/}
                                                                                <td>
                                                                                    <input style={{ width: "77%" }} type="text" key="classid" name="classid" defaultValue="9A"  onChange={this.updateInput}>
                                                                                    </input>
                                                                                </td>
                                                                                {/*<td>{this.state.date}</td>  */}
                                                                                <td>
                                                                                    <input style={{ width: "77%" }} type="text" key="date" name="date" defaultValue={this.state.date} onChange={this.updateInput3}>

                                                                                    </input>
                                                                                </td>
                                                                                <td>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        checked={this.state.checked}
                                                                                        onChange={this.onChange}
                                                                                        name="check"
                                                                                    />
                                                                                </td>

                                                                            </tr>
                                                                        )
                                                                    }
                                                                </tbody>


                                                            </table>
                                                            <div>
                                                                <Button color="info" name="Store" type="submit" value="Store">Store</Button>
                                                            </div>
                                                        </form>
                                                    </center>
                                                    <EnhancedTable />
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    )
                                },]}>
                        </CustomTabs>
                    </GridItem>
                </GridContainer>

            </div>
        )
    }
}
