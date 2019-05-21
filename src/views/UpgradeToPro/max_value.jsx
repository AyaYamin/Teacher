import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import color from '@material-ui/core/colors/deepOrange';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Search } from '@material-ui/icons/Search';
import Danger from "components/Typography/Danger.jsx";
import Close from "@material-ui/icons/Close";
import React, { Component } from 'react';

import Popup from "reactjs-popup";

import Build from "views/Grades/text";

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



class Max extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchString: "",
            idString: "",


        };
        this.updateInput = this.updateInput.bind(this);
       
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

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    render() {
        const { searchString } = this.state;

        return (
            <div >
                {
                    this.state.data.map((item, key) =>
                        <div> <input name="x" type="number" onChange={this.updateInput} min="1"  max={item.point}/>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default Max
