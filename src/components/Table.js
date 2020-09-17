import React from "react";

// create table property to capture employee data
function Table (props) {
return (
    <table className="table table-striped">
        <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col"><button className="emp" onClick={props.sortByLastName}>Name</button></th>
            <th scope="col"><button className="emp" onClick={props.sortByPhone}>Phone</button></th>
            <th scope="col"><button className="emp" onClick={props.sortByEmail}>Email</button></th>
            <th scope="col"><button className="emp" onClick={props.sortByLocation}>Location</button></th>
        </tr>
        </thead>
        <tbody>
        {/* create a new array to capture employee data 
        use ternary operator to catch error 
        */}
            {props.response? props.response.map(result => (
           
            <tr key={result.id.value}>
                <td><img alt = "" src = {result.picture.medium} className = "image" /></td>
                <td> {result.name.first +  " " + result.name.last} </td>
                <td> {result.phone} </td>
                <td> {result.email}</td>
                <td> {result.location.city} </td>
            </tr>

        )):(<p>Loading, please wait...</p>) /*send message if api calls fails*/
        }
        </tbody>
    </table>
    );
}
export default Table;