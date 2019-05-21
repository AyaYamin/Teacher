/* eslint-disable */
import AddAlert from "@material-ui/icons/AddAlert";
import Search from "@material-ui/icons/Search";
import withStyles from "@material-ui/core/styles/withStyles";

import React from "react";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Notifications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.alertTimeout = setTimeout(
      function () {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Messages</h4>
          <p className={classes.cardCategoryWhite}>


          </p>
        </CardHeader>
        <CardBody>

          <div className={classes.searchWrapper} style={{ textAlign: "center" }} > 
          <input   style={{ width: "50%", color: "#AAAAAA",  margin: "3px 0",height:"40px" , border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} 
           type="Search" Placeholder="  Search On Id Of A student Or A Teacher" name="search" />
             <Button color="white" aria-label="edit" justIcon round>
                  <Search />
                </Button>
          <br />
          <br />
          <br />

           <div>
           <GridItem xs={12} sm={6} md={10} style={{ textAlign: "center" }}>
            <inputLabel  style={{ color: "#AAAAAA" ,height:"20px" }} > The Id of Student/Teacher </inputLabel>
            </GridItem>
        
            <GridItem xs={12} sm={6} md={10} style={{ textAlign: "center" }}>

             <input style={{ width: "110%" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}}  type="password" name="password" />

            </GridItem>
            <br />

            <GridItem xs={12} sm={6} md={10} style={{ textAlign: "center" }}>
            <inputLabel  style={{ color: "#AAAAAA" }} > Your message  </inputLabel>
            </GridItem>
 
            <GridItem xs={12} sm={6} md={10} style={{ textAlign: "center" }}>
            <textarea  Style={{border: "1px solid #ccc",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}} name="message" rows="5" cols="105"></textarea>
            </GridItem>



           </div>

          </div>




          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
              <br/>    
            </GridItem>
          </GridContainer>

         
          <GridContainer justify={"center"}> 
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <GridContainer justify="center">
                
                <GridItem xs={12} sm={12} md={10} style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    color="info"
                    style={{ textAlign: "center" ,width:"70%" }}
                    onClick={() => this.showNotification("bc")}
                  >
                    Click To Send
                  </Button>
                  <Snackbar
                    place="bc"
                    color="info"
                    icon={AddAlert}
                    message="Your Message Sucessfuly sent !"
                    open={this.state.bc}
                    closeNotification={() => this.setState({ bc: false })}
                    close
                  />
                </GridItem>
           
              </GridContainer>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>


    );
  }
}

export default withStyles(styles)(Notifications);
