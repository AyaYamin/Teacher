import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Icon from '@material-ui/core/Icon';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
};

class UpgradeToPro extends React.Component {
  state = { data: [] };
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

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">


        <CardBody>
          <div className={classes.tableUpgradeWrapper}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th className={classes.center}>Subject</th>
                  <th className={classes.center}>Type of Exam</th>

                  <th className={classes.center}>Semester</th>
                  <th className={classes.center}>Mark</th>
                  <th className={classes.center}>Date of Exam</th>
                  <th className={classes.center}>Add Grades</th>
                  <th className={classes.center}> <Danger>
                    <Close />
                  </Danger></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.data.map((item, key) =>
                    <tr>
                      <td className={classes.center}>{item.subject}</td>
                      <td className={classes.center}>{item.type}</td>
                      <td className={classes.center}>{item.semester}</td>
                      <td className={classes.center}>{item.max}</td>
                      <td className={classes.center}>{item.date}</td>

                      <td className={classes.center}>

                        <Icon style={{ fontSize: 30 }}
                          onClick={
                            //this.togglePopup.bind(this)
                            (e) => {
                              var pathArray = window.location.pathname.split('/');
                              var lastParameter = pathArray.pop();
                              var lastParameter_id = pathArray.pop();
                              var data = [...this.state.data];
                              window.location.assign('/admin/upgrade-to-pro/' + lastParameter_id + '/' + lastParameter + '/' + item.type + '/' + item.subject + '/' + item.semester + '/' + item.max);
                            }
                          }
                        >add_circle
                        </Icon></td>
                      <td className={classes.center}><DeleteForeverIcon style={{ fontSize: 40 }} /></td>
                    </tr>
                  )
                }
                <tr>
                  <td />
                  <td className={classes.center}>
                    <Button round disabled>
                      Current Version
                      </Button>
                  </td>
                  <td className={classes.center}>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>

      </GridContainer>
    );
  }
}

export default withStyles(styles)(UpgradeToPro);