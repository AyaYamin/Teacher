import React from "react";

import { render } from "react-dom";

import ReactTable from "react-table";
import "react-table/react-table.css";

import MakeData from "./Utils";



function getData(url ) {
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






 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: MakeData().map(item => ({ ...item,/* full: item.age * 2 */}))
    // data:this.handledata(),
    //data:[],
      data:[],
    };
    this.handledata=this.handledata.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
  }

handledata=(e)=>{
  //e.preventDefault();
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/table/get_student.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
}

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          // data[cellInfo.index].full = data[cellInfo.index].age * 2;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
         // data={data}
         data={this.MakeData}
          defaultSorted={[
            {
              id: "full",
              desc: true
            }
          ]}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              Cell:this.renderEditable,
              onChange:this.handledata(),
            },
            {
              Header: "grade",
              accessor: "grade",
              Cell: this.renderEditable
             
            },
          /*  {
              Header: "full",
              id: "full",
              accessor: "full"
            }*/
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

//render(<App />, document.getElementById("root"));



export default App;