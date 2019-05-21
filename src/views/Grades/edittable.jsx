import color from '@material-ui/core/colors/deepOrange';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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




class Point extends Component {

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
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/getpoint.php`)

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
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/addgrade.php`, this.state)
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
                {/*}
                <table style={{ border: " 1px solid rose", align: "center" }} onChange={this.props.get}>
                    <thead style={{ border: " 1px solid rose", background: "rose" }}>
                        <tr style={{ border: " 1px solid rose" }}>
                            <th>Name</th>

                            <th>Grades</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.data.map((item, i) =>

                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td><input value={item.point} type="number" id="point" onChange={this.updateInput.bind(this)}></input></td>

                                </tr>


                            )


                        }

                    </tbody>

                </table>
                    */}
                <form onSubmit={this.handleSubmit5} >
                    <Paper style={{
                        width: "130%",
                        align: "center",

                    }}>
                        <Table style={{ Width: "100%", align: "center" }}>
                            <TableHead style={{ Width: "100%", align: "center", background: "pink" }}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell >ID</TableCell>
                                    <TableCell >Grade</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row, i) => (

                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell >
                                                {row.id}
                                            </TableCell>
                                            <TableCell ><input contentEditable value={row.point} name="point" type="number" id="point" ></input></TableCell>

                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    <Button color="success" type="submit" value="add" onSubmit={this.handleSubmit5}>Add Grades</Button>
                </form>
            </div>
        );
    }
}

export default Point
