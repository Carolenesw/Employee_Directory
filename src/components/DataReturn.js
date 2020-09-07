import React, { Component } from "react";
import Table from "../components/Table";
import api from "../utils/api";

class DataReturn extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for employee image
  componentDidMount() {
    api.userSearch()
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Table 
          empResults = {this.state.results} >
        </Table>
      </div>
    
    );
  }
}

export default DataReturn;