import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import color from '@material-ui/core/colors/deepOrange';
import Icon from '@material-ui/core/Icon';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Search from '@material-ui/icons/Search';
import Close from "@material-ui/icons/Close";

import React, { Component } from 'react';

import Popup from "reactjs-popup";

import Build from "views/Grades/text";

import Danger from "components/Typography/Danger.jsx";
import Button from "components/CustomButtons/Button.jsx";
function getData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",

            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
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

//



class Exam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchString: "",
            searchString1: "",
            searchString2: "",
            searchString3: "",
            idString: "",
            priceString: "",
            flag: '',
            showPopup: false
            //products: data,
            //originalProducts: products,

        };
        this.updateInput = this.updateInput.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        // this.handleSubmit5 = this.handleSubmit5.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        // this.search = this.search.bind(this);
        this.search = this.search.bind(this);
        this.search1 = this.search1.bind(this);
        this.search2 = this.search2.bind(this);
        this.search3 = this.search3.bind(this);
        // this.togglePopup = this.togglePopup.bind(this);
    }



    /*  togglePopup() {
          this.setState({
              showPopup: !this.state.showPopup
          });
          var pathArray = window.location.pathname.split( '/' );
          var lastParameter = pathArray.pop();
          var lastParameter_id=pathArray.pop();
          var data = [...this.state.data];
         // window.location.href="http://localhost:3000/admin/upgrade-to-pro";
         window.location.assign('/admin/upgrade-to-pro/'+lastParameter_id+'/'+lastParameter+'/');
      }*/



    deleteRow(event) {
        var data = [...this.state.data];
        data.splice(event, 1);
        this.setState({ data });
        event.preventDefault();
        console.log(this.state);
        var pathArray = window.location.pathname.split('/');
        var lastParameter = pathArray.pop();//level
        var lastParameter_id = pathArray.pop();//id
        var url = "/admin/Grades/" + lastParameter;
        this.state.data.map((item,i)=>{  
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/dele2.php?param1=` + lastParameter_id + `&param2=` + lastParameter+`&param3=` + item.type+`&param4=` + item.date+`&param5=` + item.subject, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    })}



    /*  deleteall = (event) => {
          event.preventDefault();
          //alert('Handle it on your own');
          var data = [...this.state.data];
         // data.splice(event, 1);
          this.setState({ data });
          event.preventDefault();
          console.log(this.state);
          var pathArray = window.location.pathname.split( '/' );
          var lastParameter = pathArray.pop();
          var lastParameter_id=pathArray.pop();
          var url = "/admin/Grades/"+lastParameter;
          getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/delete_all.php?param1=`+lastParameter_id+`&param2=`+lastParameter, this.state)
              .then(data => console.log(JSON.stringify(data)))
              .catch(error => console.error(error));
  
  
      }*/
    onClick(e) {
        const { flag } = this.state;
        e.preventDefault();
        this.setState({ flag: !flag });
        return (
            <div>


                {this.state.flag ? <Build /> : <div></div>}
            </div>
        );
    }

    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)

        var pathArray = window.location.pathname.split('/');
        var lastParameter = pathArray.pop();
        var lastParameter_id = pathArray.pop();
        var url = "/admin/Grades/" + lastParameter;
        getData(`http://localhost/test_project-master%20(4)/test_project-master/src/views/Grades/getexam.php?param1=` + lastParameter_id + `&param2=` + lastParameter)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }



    componentWillUnmount() {
        //this.serverRequest.abort();
    }


    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }


    search = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (
                    // item.name == event.target.value ||
                    // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    // item.id == Number(event.target.value) ||
                    item.subject.toLowerCase().includes(event.target.value.toLowerCase())

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

    search1 = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (
                    // item.name == event.target.value ||
                    // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    // item.id == Number(event.target.value) ||

                    // item.id.toLowerCase().includes(event.target.value.toLowerCase())
                    //item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.semester.toLowerCase().includes(event.target.value.toLowerCase())
                );
            });
            this.setState({
                ...this.state,
                searchString1: event.target.value,
                data: filtered
            });
        } else {
            this.setState({
                ...this.state,
                data: this.state.data,

                searchString1: "",

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

                    item.max.toLowerCase().includes(event.target.value.toLowerCase())
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


    search3 = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (

                    //item.date.toLowerCase().includes(event.target.value.toLowerCase())
                    item.type.toLowerCase().includes(event.target.value.toLowerCase())
                    //item.semester.toLowerCase().includes(event.target.value.toLowerCase())
                );
            });
            this.setState({
                ...this.state,
                searchString3: event.target.value,
                data: filtered
            });
        } else {
            this.setState({
                ...this.state,
                data: this.state.data,

                searchString3: "",

                // idString: "",
                // priceString: ""
            });
            setTimeout(() => {
                this.componentDidMount();
            }, 50);

        }
    };



    render() {
        const { searchString, searchString1, searchString2, searchString3 } = this.state;

        return (
            <div className="Table">
                <input style={{ width: "15%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="search" placeholder="Search By Semester" name="search2" value={searchString1}
                    onChange={this.search1} />
                <Button color="white" justIcon round name="search" type="submit" value="search"
                    onClick={this.onClick} >

                    <Search />

                </Button>
                <input style={{ width: "20%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="search" placeholder="Search By Subject" name="search1" value={searchString}
                    onChange={this.search}></input>
                <Button color="white" justIcon round name="search" type="submit" value="search"
                    onClick={this.onClick}>

                    <Search />

                </Button>
                <input style={{ width: "20%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="search" placeholder="Search By Max Point" name="search3" value={searchString2}
                    onChange={this.search2} />
                <Button color="white" justIcon round name="search" type="submit" value="search"
                    onClick={this.onClick} >

                    <Search />

                </Button>
                <input style={{ width: "20%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="search" placeholder="Search By Type" name="search4" value={searchString3}
                    onChange={this.search3} />
                <Button color="white" justIcon round name="search" type="submit" value="search"
                    onClick={this.onClick} >

                    <Search />

                </Button>







                <div style={{ display: 'flex', width: '100%' }}>


                    <Paper style={{
                        width: "100%",
                        align: "center",
                        size: "100%",
                        align: "center",
                        textAlign: "center"
                    }}>
                        <Table style={{
                            width: "100%",
                            align: "center",
                            size: "50%"
                            , minWidth: 100, align: "center",
                            textAlign: "center"

                        }}>


                            <thead style={{ color: "#000 bold", Width: "50%", align: "center", background: "rgb(241, 245, 248)",fontSize:"18px",fontFamily:"Comic Sans MS" }} >
                                <tr >
                                    <th >Subject</th>
                                    <th >Semester</th>
                                    <th >Mark</th>
                                    <th >Type of Exam</th>
                                    <th >Date of Exam</th>
                                    <th >Add Grades</th>
                                    <th >View Grades</th>
                                    <th > <Danger>
                                        <Close />
                                    </Danger></th>
                                </tr>
                            </thead>
                            <TableBody>
                                {
                                    this.state.data.map((item, key) =>

                                        <TableRow key={key} style={{ fontSize:"20px",fontFamily:"Comic Sans MS"  }} >
                                            {/*   <TableCell style={{ width: "10%", }}>{item.level}</TableCell>*/}
                                            <TableCell style={{ width: "2%", }}>{item.subject}</TableCell>
                                            <TableCell style={{ width: "2%", }}>{item.semester}</TableCell>
                                            <TableCell style={{ width: "2%", }}>{item.max}</TableCell>
                                            <TableCell style={{ width: "2%", }}>{item.type}</TableCell>
                                            <TableCell style={{ width: "5%", }}>{item.date}</TableCell>

                                            <TableCell style={{ width: "2%", }}>
                                                <Icon style={{ fontSize: 30 }}
                                                    onClick={
                                                        //this.togglePopup.bind(this)
                                                        (e) => {
                                                            e.preventDefault();
                                                            var pathArray = window.location.pathname.split('/');
                                                            var lastParameter = pathArray.pop();
                                                            var lastParameter_id = pathArray.pop();
                                                            var data = [...this.state.data];
                                                            window.location.assign('/admin/upgrade-to-pro/' + lastParameter_id + '/' + lastParameter + '/' + item.type + '/' + item.subject + '/' + item.semester + '/' + item.max);
                                                        }
                                                    }
                                                >add_circle
                                               </Icon>
                                            </TableCell>
                                            <TableCell style={{fontSize: 30}} style={{ width: "3%", }}>
                                            <Icon style={{fontSize: 30}}
                                            onClick={
                                                //this.togglePopup.bind(this)
                                                (e) => {
                                                    e.preventDefault();
                                                    var pathArray = window.location.pathname.split('/');
                                                    var lastParameter = pathArray.pop();
                                                    var lastParameter_id = pathArray.pop();
                                                    var data = [...this.state.data];
                                                    window.location.assign('/admin/Views_grades/' + lastParameter_id + '/' + lastParameter + '/' + item.type + '/' + item.subject + '/' + item.semester + '/' + item.max);
                                                }
                                            }

                                            >content_copy</Icon></TableCell>
                                            



                                            <TableCell style={{ width: "3%", }}><DeleteForeverIcon style={{ fontSize: 40 }} onClick={this.deleteRow.bind(this)} /></TableCell>
                                        </TableRow>


                                    )


                                }



                            </TableBody>

                        </Table>

                    </Paper>

                </div>
                {/*    <TableCell style={{ width: "30%", }}><DeleteForeverIcon style={{ fontSize: 40 }} onClick={this.deleteall} />Delete All</TableCell>
           */}   </div>
        );
    }
}

export default Exam

// <div>
//<h1>All Events</h1>
//<table>
  //  <tbody>
   //     {contents}
 //   </tbody>

//</table>

//</div>