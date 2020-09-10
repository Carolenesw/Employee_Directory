import React, { Component } from "react";
import Table from "../components/Table";
import api from "../utils/api";

// extends DataReturn to get data from api call
class DataReturn extends Component {
  state = {
    response: []
  };

  
  // When this component mounts, search the API for employee
  componentDidMount() {
    api.userSearch()
    
      .then(res =>  {
        console.log("resp:", res)
          this.setState({ response: res.data.results})})
        
      .catch(err => console.log(err));
   
  };


  render() {
    return (
      <div>
        <Table response = {this.state.response} 

        />   
     </div>
    
    );
  }
}

export default DataReturn;