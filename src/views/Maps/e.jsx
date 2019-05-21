
import React, { Component } from 'react';


function getData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      //"Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
  //body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.json()); // parses response to JSON
}

/*export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
    //this.handleSubmit=this. handleSubmit.bind(this);
  }




  /*handleSubmit=(e)=>{
    e.preventDefault();
    getData(`http://localhost/test_project-master(4)/test_project-master/src/views/Maps/testt/data.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
  
  }*/


  /* handleRowDel(product) {
     var index = this.state.products.indexOf(product);
     this.state.products.splice(index, 1);
     this.setState(this.state.products);
   };*/

  /* handleAddEvent(evt) {
     var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
     var product = {
       id: id,
       name: "",
       price: "",
       category: "",
       qty: 0,
       Att:0,
     }
     this.state.products.push(product);
     this.setState(this.state.products);
 
   }*/


   
   

/*

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };

    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  };




  /*render() {

    return (
      <div>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} /*onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}*/ 
    /*  </div>
    );

  }

}*/


export default class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var th = this;
    //this.serverRequest = axios.get(this.props.source)
    getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/data.php`)

        .then(function (event) {
            th.setState({
                data: event//.data
            });
        })


}

  update=(e)=>{
    e.preventDefault();
     let state={};
    state[e.target.name]=e.target.value;
    this.setState(state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    getData(`localhost/test_project-master%20(4)/test_project-master/src/views/Maps/data.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));

  }


  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;

    /* return (
       <form action="data.php" onChange={this.handleSubmit} >
       <div>
         <table className="table table-bordered"  style={{ background: "white", border: " 1px solid rose" }} onChange={this.props.get}>
           <thead  style={{ border: " 1px solid blue", background: "blue" }}>
             <tr  style={{ border: " 1px solid black"}}>
               <th>Name</th>
               <th>ID</th>
               <th>Type</th>
               <th>Attendance</th>
               <th>Attitude</th>
             </tr>
           </thead>
           <tbody>
             {
     this.state.data.map((item, i) =>
                                     
               <tr className="eachRow" key={i} >
               
         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} 
            cellData={{
              type:"name",
              id:"name",
              value:item.name,
            }}
         
        />
 
         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} 
         cellData={{
           type:"id",
           id:"id",
           value:item.id,
         }}
          
         />
 
         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} 
             cellData={{
              type:"type",
              id:"type",
              value:'',
             }}
         
         />
 
         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} 
            cellData={{
              type:"attendance",
              id:"attendance",
              value:'',
            }}
         
         />
 
           <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} 
              cellData={{
              type:"attitude",
              id:"attitude",
              value:'',
              }}
            
         />
 
       </tr>
  
       ) 
         }
           </tbody>
 
         </table>
       </div>
       </form>
     );
 
   }
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 class EditableCell extends React.Component {
   render() {
     return (
       <td>
 
         <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
       </td>
     );
 
   }
 
 }*/





    return (
      <div className="Table">
        <table style={{ border: " 1px solid rose", align: "center" }} onChange={this.props.get}>
          <thead style={{ border: " 1px solid rose", background: "rose" }}>
            <tr style={{ border: " 1px solid rose" }}>
              <th>name</th>
              <th>id</th>
              <th>type</th>
             
              <th>Attendance</th>
              <th>Attitude</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.data.map((item, i) =>(

                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>
                
                  
                  </td>
                  <td>
                  {/* <input type="number" name="attendance" value="attendance" onChange={this.update}/>  */}
                  </td>
                  <td>
                 {/* <input type="number" name="attitude" value="attitude" onChange={this.update}/>*/}
                  </td>
                  <td>
                   
                  </td>
                </tr>


              )

              )
            }

          </tbody>

        </table>
      </div>
    )
  }
}
