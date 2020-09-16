// import all components for rendering
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import api from "../utils/api"
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
// import '/App.css';

// create class component to capture data for search function
class App extends Component {
  state = {
    search: "",
    results: [],

  };



  // When this component mounts, search the API for employee
  componentDidMount() {
    api.userSearch()
    
      .then(res =>  {
        console.log("resp:", res)
          this.setState({ results: res.data.results})})
          
      .catch(err => console.log(err));
   
  };

  // Filter employee based on search criteria
  filterEmpoyee = (searchkey) => {
    let empResult = this.state.results.filter((response) => {
      return response.name.last.includes(this.state.search);
    });
    console.log("Search Name:", empResult);
    this.setState({
      results: empResult,
    });
  };

  // When the form is submitted, search the API for this.state.search`
  handleFormSubmit(event) {
    event.preventDefault();
    this.filterEmpoyee(this.state.search);
  }

  // get user input and handle change event
  handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Header 
        handleInput={this.handleInputChange.bind(this)} 
        handleFormSubmit={this.handleFormSubmit.bind(this)}
        />
        <Container>
          <Table
            response={this.state.results}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
