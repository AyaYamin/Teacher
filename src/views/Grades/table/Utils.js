import React,{Component} from "react";

import namor from "namor";

import "./index.css";




function getData(url ) {
  return fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json",

          // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.json()); // parses response to JSON
}
/*const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
*/
const newPerson = () => {
 // const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
   visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
 
  };
};
/*
 class MakeData extends  React.Component{


  constructor(props){
    super(props);
    this.state={
     data:[],
    };
  }


 handledata=(e)=>{
  getData(`http://localhost/xx-master/src/views/Grades/table/get_student.php`, this.state)
  .then(data => console.log(JSON.stringify(data)))
  .catch(error => console.error(error));
 }




  render(){
    return(
      <div>
        {this.handledata()}
      </div>
      )
  }



}

export default  MakeData;




//export  function makeData(){
 // let state=[];
  /* return(
    getData(`http://localhost/xx-master/src/views/Grades/table/get_student.php`, state)
             .then(data => console.log(JSON.stringify(data)))
             .catch(error => console.error(error))
 
  )*/
//}


/*export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      //children: range(10).map(newPerson)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
   
  <br />
    <a href="#" target="_blank">
      <img    src="#"style={{ width: `150px`, margin: ".5em auto .3em" }}/> 
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em></em>
  </div>;

  */
