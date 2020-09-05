import React from "react";

function Search(props) {
  return (
    <form>
      <div>
        <div
          className="form-group"
          style={{ width: "25%", margin: "auto", marginTop: "10px" }}>
        
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="John Brown"
            id="search"
          />
          <br />
        </div>
      </div>
    </form>
  );
}


export default Search;
