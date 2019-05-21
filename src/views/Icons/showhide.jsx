import React, { Component } from 'react';
import Build from "views/Icons/Table"

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

function WarningBanner(props) {
  return (
    <div className={props.warn ? "warning" : "hide"}>
      <h1> Warning! </h1>
    </div>
  );
}

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleToggleClick1 = this.handleToggleClick1.bind(this);

  }




  handleToggleClick = (e) => {
    e.preventDefault();
    window.location.assign('/admin/Students/');
  }
  handleToggleClick1 = (e) => {
    e.preventDefault();
    window.location.assign('/admin/Grades/');
  }

  render() {
    const style = this.state.showWarning ? { display: 'none' } : {};
    return (

      <div>
        {
        
            <div>
              <Button type="submit" color={"info"}  onClick={this.handleToggleClick} >veiw student </Button>
              <Button type="submit" color={"info"} onClick={this.handleToggleClick1} >create exam and add Grade </Button>
              <Button type="submit" color={"info"} onClick={this.handleToggleClick2} >add attendance </Button>
              <Button type="submit" color={"info"} onClick={this.handleToggleClick4} >show activity </Button>

            </div>
        
        }
      </div>
    );
  }
}




