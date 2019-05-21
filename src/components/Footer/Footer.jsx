import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import React from "react";

import PropTypes from "prop-types";

import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
            
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
             &copy; {1900 + new Date().getYear()}{" "}
            <a href="#" className={classes.a}></a>
            Student Behavior Tracking System
            , made with love for a better Behavior
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
