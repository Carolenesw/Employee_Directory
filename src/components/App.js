// import all components for rendering
import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import DataReturn from "./DataReturn";
// import logo from '/logo.svg';
// import '/App.css';

// create class component to capture data for search function
class App extends Component {

state = {
  search: ""
}

// get user input and handle change event
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

render (){
  return (
    <div>
      <Header 
        handleInput = {this.handleInputChange}
      />
      {/* <p>{this.state.search}</p> */}
      <Container>
        <DataReturn />
      </Container>
      <Footer />
    </div>
  );
}
}
  

export default App;
