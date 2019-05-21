import color from '@material-ui/core/colors/deepOrange';
import Icon from '@material-ui/core/Icon';

import React, { Component } from 'react';

import Card from "components/Card/Card.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import Table from "components/Table/Table.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import InputForm from '../UserProfile/InputForm';

import Add from './add';


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
        .then(response => response.text())
}

class Build extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: '',
            //  data: [],
            searchString: "",
            idString: "",
            priceString: "",
        };
        this.updateInput = this.updateInput.bind(this);
        this.updateInput3 = this.updateInput3.bind(this);
        this.handleSubmit9 = this.handleSubmit9.bind(this);
        this.search2 = this.search2.bind(this);
        // this.handleSubmit_grades=this.handleSubmit_grades.bind(this);
      //  this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }



    componentDidMount() {
        var th = this;
        var pathArray = window.location.pathname.split('/');
        var lastParameter = pathArray.pop();
        var lastParameter_id = pathArray.pop();
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/activity.php?param1=` + lastParameter_id + `&param2=` + lastParameter)
            .then(function (event) {
                th.setState({ data: event });
            })
    }


    updateInput3 = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
        console.log(this.state);
    }



   /* handleSubmit = (e) => {
        e.preventDefault();
        postData(`http://localhost/test_project-master(4)/test_project-master/src/views/Maps/testt/test.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }*/

    handleSubmit9 = (e) => {
        e.preventDefault();
        return (<div> {<Add />}</div>)
    }

    // handleSubmit_grades=(e)=>{
    //  e.preventDefault();
    //  window.location.assign('http://localhost/test_project-master(4)/test_project-master/src/views/Maps/testt/test.php');
    // }


   /* onSubmit = (e) => {
        e.preventDefault();
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/testt/test.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }
*/


    handleSubmit5 = (event) => {
        event.preventDefault();
        console.log(this.state);
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/activity.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }







    search = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (
                    // item.name == event.target.value ||
                    item.Type.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.description.toLowerCase().includes(event.target.value.toLowerCase())


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
                // idString: "",
                // priceString: ""
            });
            setTimeout(() => {
                this.componentDidMount();
            }, 50);

        }
    };
    search2 = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (
                    // item.name == event.target.value ||
                    // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    // item.id == Number(event.target.value) ||

                    item.Type.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.description.toLowerCase().includes(event.target.value.toLowerCase())


                    //item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    //item.semester.toLowerCase().includes(event.target.value.toLowerCase())
                );
            });
            this.setState({
                ...this.state,
                searchString2: event.target.value,
                data: filtered
            });
        } else {
            this.setState({
                ...this.state,
                data: this.state.data,

                searchString2: "",

                // idString: "",
                // priceString: ""
            });
            setTimeout(() => {
                this.componentDidMount();
            }, 50);

        }
    };



    render() {
        const {
            searchString
        } = this.state;


        const styleInput = {
            width: "45%",
            alignContent: "Center",
            height: "30px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            alignItems: "Center",
            // color:{"danger"},       
        };
        const style11 = { alignContent: "Left", width: "40%", color: "#000", margin: "3px 0", height: "30px", border: "1px solid #000", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" };
        return (
            /*  <form  action="test.php" onSubmit={this.handleSubmit} > */
            <div className="Table">
                <input
                    style={style11}
                    type="search"
                    value={searchString}
                    onChange={this.search2}
                    placeholder="Search"
                />



                <center>
                    <div>
                        <table style={{ background: "white", border: " 1px solid #9fe58a" }} onChange={this.props.get}>
                            <thead style={{ border: " 5px solid #9fe58a", background: "#9fe58a" ,fontSize:"18px",fontFamily:"Comic Sans MS"}}>
                                <tr>
                                    <td>Type Of Activity</td>
                                    <td>Description</td>
                                    <td>Behavior</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((item, i) =>
                                        <tr key={i} style={{fontSize:"18px",fontFamily:"Comic Sans MS"}}>
                                            <td>{item.Type}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <Button color="success" type="submit" style={{ fontSize: 20 }}>
                                                    <Icon style={{ fontSize: 20 }}
                                                        onClick={
                                                            //this.togglePopup.bind(this)
                                                            (e) => {
                                                                var pathArray = window.location.pathname.split('/');
                                                                var lastParameter = pathArray.pop();
                                                                var lastParameter_id = pathArray.pop();
                                                                var data = [...this.state.data];
                                                                window.location.assign('/admin/Activities_grades/' + lastParameter_id + '/' + lastParameter + '/' + item.Type + '/' + item.description);
                                                            }
                                                        }
                                                    >add_circle
                                           </Icon> </Button>
                                           {this.componentDidMount()}
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </center>
            </div>
        );
    }
}





export default Build

