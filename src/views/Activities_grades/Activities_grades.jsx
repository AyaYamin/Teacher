import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

import React, { Component } from 'react';

import SimpleModalWrapped from "views/Activities_grades/text";

import swal from 'sweetalert';

import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
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
export default class Activities_grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
    this.getType = this.getType.bind(this);
    this.getlevel = this.getlevel.bind(this);
    this.getSection = this.getSection.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  componentWillUnmount() {
    //this.serverRequest.abort();
  }
  componentDidMount() {
    var th = this;
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Activities_grades/gets.php?param1=` + lastParameter_id + `&param2=` + lastParameter3)
      .then(function (event) {
        th.setState({ data: event });
      })
  }
  getType = (e) => {
    var th = this;
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    return lastParameter2;
  }
  getlevel = (e) => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    //var url = "/admin/Students/"+lastParameter;
    return lastParameter3;
  }
  getSection = (e) => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    //var url = "/admin/Students/"+lastParameter;
    return lastParameter_id;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();//des
    var lastParameter2 = pathArray.pop();//type
    var lastParameter3 = pathArray.pop();//leve
    var lastParameter_id = pathArray.pop();//id

    this.state.data.map((item, i) => {

      postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Activities_grades/store.php?param1=` + lastParameter_id + `&param2=` + lastParameter3 + `&param3=` + lastParameter2 + `&param4=` + item.name+" "+item.mname+" "+item.lname+ `&param5=` + item.id, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error))


    })
    e.target.reset();
    swal("Stored Successfully");
  }

  handleClick1 = (e) => {
    e.preventDefault();
    this.state.data.map((item,i)=>{
       window.location.assign('http://localhost:3001/admin/Activities/'+item.classid+"/"+item.level);
    })
   
  }
  render() {
    return (
      <form action="store.php" onSubmit={this.handleSubmit}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={10}>
          <Button name="search" onClick={this.handleClick1} type="submit" style={{ background: "#000" }}  value="back"> <ThreeSixtyIcon />
          Back To Activity Page
        </Button>
            <Card>
              <CardHeader color={"success"}>
                <pre style={{fontSize:"18px",fontFamily:"Comic Sans MS" }}>
                  Behavior Of:    Level : {this.getlevel()}          Section : {this.getSection()}
              <p> Max Points For the Attitude Of Activity : 10</p>
                    </pre>
              </CardHeader>
              <CardBody>
              <p style={{fontSize:"18px",fontFamily:"Comic Sans MS" }}>Type of Activity : {this.getType()} </p>
                <center>
                  <div>
                   
                    <table style={{ background: "white", border: " 1px solid #9fe58a" }} onChange={this.props.get}>
                      <thead style={{ border: " 5px solid #9fe58a", background: "#9fe58a" ,fontSize:"18px",fontFamily:"Comic Sans MS" }}>
                        <tr>
                        <td>ID_Student</td>
                   
                          <td> Name</td>
                        
                          <td>Attitude</td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.data.map((item, i) =>

                            <TableRow key={i} style={{fontSize:"18px",fontFamily:"Comic Sans MS" }}>
                             <TableCell>{item.id}</TableCell>
                              <TableCell>{item.name +" "+item.mname+" "+item.lname}</TableCell>
                             
                             
                              <TableCell>
                                <input  name={item.name+" "+item.mname+" "+item.lname}  type="number" onChange={this.updateInput} min="0" max="10"/>
                              </TableCell>
                            </TableRow>
                          )
                        }

                      </tbody>
                    </table>

                  </div>
                </center>
              </CardBody>

              <CardFooter>

                <Button color={"success"} name="store" type="submit" value="store">Store</Button>

              </CardFooter>

            </Card>
          </GridItem>
        </GridContainer>
       { /*<SimpleModalWrapped />  */}
      </form>
    );
  }
}