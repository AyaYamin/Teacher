import InputLabel from "@material-ui/core/InputLabel";
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import withStyles from "@material-ui/core/styles/withStyles";
import BugReport from "@material-ui/icons/BugReport";

import React from "react";

import swal from "sweetalert";

import  Form from "views/UserProfile/form.tsx";

import classNames from 'classnames';

import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import InputForm from './InputForm';
///aaaaa
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
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


/*const {  password } = '';
const passwordGroupClass = classNames('form-group',
{ 'has-error': !password.isValid };
)*/

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      flag: false,
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }




  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    postData(`http://localhost/test_project-master (4)/test_project-master/src/views/UserProfile/Edit.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    // alert(`Updated Successfully ^_^`)
    event.target.reset();
    return (
      swal("","updated Successfully !" )
    )

  }



  /* handleSubmit1(event) {
     event.preventDefault();
     //console.log(this.state);
     postData(`http://localhost/material-dashboard-react-v1.5.0/teacher/src/views/UserProfile/Edit1.php`, this.state)
       .then(data => console.log(JSON.stringify(data)))
       .catch(error => console.error(error));
       alert(`Updated Successfully ^_^`)
      event.target.reset();
 
   }*/

  resetPass = (event) => {
    event.preventDefault();
    console.log(this.state);
    postData(`http://localhost/test_project-master (4)/test_project-master/src/views/UserProfile/Edit1.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    //  alert(`Updated Successfully ^_^`)
    event.target.reset();
    this.setState({ flag: true });
    return (
      <div>
        {this.state.flag ?
          <h4 color="primary">Updated Successfuly</h4> :
          <span> </span>}
      </div>

    )
  }
  validate(event) {
    var pass = event.target.value;
    console.log('aya');
    var reg = /^[A-Z]*$/;
    console.log('aya');
    var test = reg.test(pass);
    console.log('aya');
    if (test) {
      return (
        <div>

        </div>
      )
      // alert('pass');

    } else {
      console.log('aya');
      alert('fail');
    }
  }



  onChange = (e) => {
    const state = {
      ...this.state,
      [e.target.name]: {
        ...this.state[e.target.name],
        value: e.target.value,
      }
    };

    this.setState(state);
  }
  handleClick1=(e)=>{
    e.preventDefault();
    window.location.href="http://localhost:3001/admin/Classes";
  }
  render() {

    const { classes } = this.props;
    const { password } = this.state;
    const passwordGroupClass = classNames('form-group',
      { 'has-error': !password.isValid }
    )


    const styleInput = {
      width: "100%",
      alignContent: "Center",
      height: "20px",
      margin: "3px 0",
      border: "1px solid #000",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px"
    };
    return (
      <div style={{ alignContent: "Center" }}>
 <Button onClick={this.handleClick1}  name="search" type="submit" style={{ background: "#000" }}   
        value="back"> <ThreeSixtyIcon />
          Back To Classes
        </Button>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} >
            <CustomTabs
              title="teacher:"
              headerColor="info"
              tabs={[
                {
                  tabName: "Personal Information",
                  tabIcon: BugReport,
                  tabContent: (
                    <GridContainer justify="center">
                      <form action="Edit.php" onSubmit={this.handleSubmit} style={{ alignContent: "Center" }}>
                        <GridItem xs={12} sm={12} md={10} >
                          <Card justify="center">

                            <CardHeader color="info" justify="center">
                              <h4 className={classes.cardTitleWhite}>Edit Personal Information</h4>

                            </CardHeader>
                            <CardBody justify="center">
                              <GridContainer justify="center" style={{ alignContent: "Center" }}>
                                <GridContainer justify="center">
                                  <InputForm inputType="number" inputKey="id" inputLabel="User ID: " updateInput={this.updateInput} />
                                  <InputForm inputType="text" inputKey="address" inputLabel="Personal Address : " updateInput={this.updateInput} />
                                  <InputForm inputType="text" inputKey="city" inputLabel="City : " updateInput={this.updateInput} />
                                  <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " updateInput={this.updateInput} />
                                </GridContainer>
                              </GridContainer>
                            </CardBody>

                            <CardFooter>
                              <Button color="info" name="UpdateProfile" type="submit" value="UpdateProfile">Update</Button>
                            </CardFooter>

                          </Card>
                        </GridItem>

                      </form>
                    </GridContainer>
                  )
                },
                {
                  tabName: "Password",
                  tabIcon: BugReport,
                  tabContent: (

                    <form className={passwordGroupClass}>
                      <GridItem xs={12} sm={12} md={10} >
                        <Card justify="center">

                          <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>Reset Password</h4>

                          </CardHeader>
                          <CardBody>
                            <GridContainer justify="center">
                              <GridContainer justify="center">
                                 
                        <Form />
                                 
                              </GridContainer>
                            </GridContainer>

                          </CardBody>

                          <CardFooter>
                          </CardFooter>

                        </Card>
                      </GridItem>

                    </form>




                  )
                }
              ]}
            />
          </GridItem>


        </GridContainer>

      </div>
    );
  }
}

export default withStyles(styles)(UserProfile);
