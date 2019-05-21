import React, { Component } from 'react';
import color from '@material-ui/core/colors/deepOrange';
import Button from "components/CustomButtons/Button.jsx";
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
//

class Table1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchString: "",
            idString: "",
            priceString: "",
            //products: data,
            //originalProducts: products,

        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.search = this.search.bind(this);
    }
    deleteRow(event) {
        var data = [...this.state.data];
        //var x=getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state);
        data.splice(event, 1);

        this.setState({ data });
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }

    deleteall = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));


    }
    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/test_project-master%20(4)/test_project-master/src/views/TableList/search1.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
        // getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`)

    }
    handleSubmit5 = (event) => {

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
                    item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.id.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.lname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.classid.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.part_id.toLowerCase().includes(event.target.value.toLowerCase()) ||

                    item.city.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.classid.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.phone.toLowerCase().includes(event.target.value.toLowerCase()) ||

                    item.addresss.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.date.toLowerCase().includes(event.target.value.toLowerCase())

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




    render() {
        const {
            searchString
        } = this.state;

        return (
            <div className="Table">



                <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #000", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="search" placeholder="Search" name="search" value={searchString}
                    onChange={this.search} />
                <Paper style={{
                    width: "100%",
                    align: "center",
                    size: "100%",
                  
                }}>
                    <Table style={{
                        width: "30%",
                        align: "center",
                        size: "50%"
                        , minWidth: 100

                    }}>

                        <TableHead style={{ color: "#000 bold", Width: "100%", align: "center", }}>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell >Mid Name</TableCell>
                                <TableCell >Last Name</TableCell>
                                <TableCell >Level</TableCell>
                                <TableCell>Student ID</TableCell>
                                <TableCell >Parant ID</TableCell>
                                <TableCell >City</TableCell>
                                <TableCell >Phone</TableCell>
                                <TableCell >Address</TableCell>
                                <TableCell >Date Of Birth </TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                this.state.data.map((item, key) =>

                                    <TableRow key={key}>
                                        <TableCell style={{ width: "30%", }}>{item.name}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.mname}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.lname}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.id}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.classid}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.part_id}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.city}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.phone}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.addresss}</TableCell>
                                        <TableCell style={{ width: "30%", }}>{item.date}</TableCell>
                                    </TableRow>


                                )


                            }



                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Table1

// <div>
//<h1>All Events</h1>
//<table>
  //  <tbody>
   //     {contents}
 //   </tbody>

//</table>

//</div>