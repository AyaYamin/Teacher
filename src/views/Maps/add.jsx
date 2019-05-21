import InputLabel from '@material-ui/core/InputLabel';
import withStyles from "@material-ui/core/styles/withStyles";

import React, { Component } from 'react';

import swal from 'sweetalert';

import Card from "components/Card/Card.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import InputForm from './InputForm';

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
export default class Add extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();
        var pathArray = window.location.pathname.split('/');
        var lastParameter = pathArray.pop();
        var lastParameter_id = pathArray.pop();
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/add.php?param1=` + lastParameter_id + `&param2=` + lastParameter, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

        e.target.reset();
        setTimeout(() => {
            //this.componentDidMount();
        }, 50);

        swal("You Created New Activity","");
    }

    render() {
        const { classes } = this.props;
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "40px",
            margin: "3px 0",
            border: "1px solid #000",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",

        };
        return (
            <form action="add.php" onSubmit={this.onSubmit} >
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color={"success"}>
                                <h4 style={{fontSize:"18px",fontFamily:"Comic Sans MS" }}> Add New Activity</h4>
                            </CardHeader>
                            <CardBody>
                                <center>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <InputForm inputType="text" inputKey="type" inputLabel="Type of Activity " updateInput={this.updateInput} />
                                            <InputForm inputType="date" inputKey="date" inputLabel="Date of Acitvity" updateInput={this.updateInput} />
                                           
                                            <div style={{ display: 'flex', width: '100%' }}>
                                                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                                                    <InputLabel style={{ color: "#000", alignContent: "Center",fontSize:"18px",fontFamily:"Comic Sans MS" }}> Description</InputLabel>
                                                </GridItem>
                                                <GridItem xs={12} sm={6} md={12}>
                                                    <textarea name="desc" type="text" onChange={this.updateInput} required style={styleInput} />
                                                </GridItem>
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                </center>
                            </CardBody>

                            <CardFooter>
                                <Button color={"success"} name="add" type="submit" value="Add">Add </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        )
    }

}
