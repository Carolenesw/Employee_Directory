import React from "react";

function Search(props) {
  return (
    <form>
      <div>
        <div
          className="form-group"
          style={{ width: "25%", margin: "auto", marginTop: "10px" }}
        >
          <p>Enter Employee's name</p>
          <input
            onChange={props.handleInput}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="John Brown"
            id="search"
          />
          <button className="btn my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
