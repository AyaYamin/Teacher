



import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

import React, { Component } from "react";

import Build from 'views/Icons/Table';

import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";



function getData(url) {
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




class Icons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.getClasses = this.getClasses.bind(this);
  }

  getClasses = (e) => {
  //  var pathArray = window.location.pathname.split('/');
   // var lastParameter = pathArray.pop();
  /*  getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/getclass.php`)
      .then(function (event) {
    
      })*/

    return (<div><Build /></div>);
  }



  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>

                <CardHeader plain color="info">
                  <center><h4 className={classes.cardTitleWhite} > My Available Classes </h4></center>
                  <p className={classes.cardCategoryWhite}></p>
                </CardHeader>
                <CardBody>
                  <div style={{ width: "100%", textAlign: "center" }} >

                    <center>{this.getClasses()}</center>
                  </div>
                </CardBody>

              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}



export default withStyles(iconsStyle)(Icons);


