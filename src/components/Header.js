import React from "react";
import Search from "./Search";



function Header(props) {
  return (
    <div>
      <header>
        <h1 className="header">Employee Directory</h1>
      </header>
      <Search
        // handle user input
        handleInput={props.handleInput}
        handleFormSubmit={props.handleFormSubmit}
      />
    </div>
  );
}



export default Header;
