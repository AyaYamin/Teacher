import InputLabel from '@material-ui/core/InputLabel';

import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
class InputForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {};
        this.updateInput = this.updateInput.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    updateInput(event){
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
      }
    
    render() {

        
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "20px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            
          };
        return (
            <div style={{display: 'flex', width: '100%'}}>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                    <InputLabel style={{ color: "#000", alignContent: "Center" } }> {this.props.inputLabel} </InputLabel>
                </GridItem>
                <GridItem xs={12} sm={6} md={12}>
                    <input required style={styleInput} type={this.props.inputType} name={this.props.inputKey} onChange={this.props.updateInput} />
                </GridItem>

            </div>
        );
    }
}

export default InputForm;