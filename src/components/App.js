// import all components for rendering
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import DataReturn from "./DataReturn";
// import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from '/logo.svg';
// import '/App.css';

// create class component to capture data for search function
class App extends Component {
  state = {
    search: "",
  };

  // Filter employee based on search criteria
  filterEmpoyee = (searchkey) => {
    let empResult = this.state.search.filter((response) => {
      return response.search === searchkey;
    });
    console.log("Search Name:", empResult);
    this.setState({
      search: empResult,
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
        {/* <p>{this.state.search}</p> */}
        <Container>
          <DataReturn
            search={this.state.search}
            // handleFormSubmit={this.handleFormSubmit.bind(this)}
            // handleInputChange={this.handleInputChange.bind(this)}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
