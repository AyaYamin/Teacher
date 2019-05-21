




import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import color from '@material-ui/core/colors/deepOrange';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from "components/CustomButtons/Button.jsx";
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




class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
    }



    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
       var pathArray = window.location.pathname.split('/');
        var lastParameter = pathArray.pop();
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/getclass.php?id=`+lastParameter)
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



    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
      //  var pathArray = window.location.pathname.split('/');
       // var lastParameter = pathArray.pop();
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/getclass.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }

    send = (e) => {
        var data = [...this.state.data];
        data.splice(e, 1);
        data.slice(0, 0);
        this.setState({ data });
        e.preventDefault();
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/send.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }

    render() {
        //   const { classes } = props;


        const styles = theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing.unit * 3,
                overflowX: 'auto',
            },
            table: {
                minWidth: 700,
            },
        });


        return (
            <div className="Table">
                <table style={{ border: " 1px solid rose", align: "center" }} onChange={this.props.get}>
                    <thead style={{ border: " 1px solid rose", background: "#e3f2fd" ,fontSize:"20px",fontFamily:"Comic Sans MS"}}>
                        <tr style={{ border: " 1px solid rose" }}>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Students</th>
                            <th>Grades</th>
                          
                            <th>Activities</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.data.map((item, i) =>

                                <tr key={i} style={{fontSize:"20px",fontFamily:"Comic Sans MS"}}>
                                
                                    <TableCell>{item.level}</TableCell>
                                    <TableCell>{item.section}</TableCell>


                                    <TableCell>
                                        <Button style={{ background: "#e3f2fd" }} type="submit" > <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Students/' + item.section + '/' + item.level);
                                            }}>Students</a>
                                        </Button>
                                    </TableCell>
                                    <TableCell>

                                        <Button style={{ background: "#e3f2fd" }} type="submit" >
                                           
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    window.location.assign('/admin/Grades/' + item.section + '/' + item.level);
                                                }}> Grades</a>
                                        </Button>
                                    </TableCell>
                                  
                                    <TableCell>

                                        <Button style={{ background: "#e3f2fd" }} type="submit" ><a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Activities/' + item.section + '/' + item.level);
                                            }}> Activities</a>
                                        </Button>
                                    </TableCell>
                                </tr>


                            )


                        }

                    </tbody>

                </table>

            </div>
        );
    }
}

export default Build

