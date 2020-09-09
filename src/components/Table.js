import React from "react";

// create table property to capture employee data
function Table (props) {
return (
    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
        </thead>
        <tbody>
        {/* create a new array to capture employee data 
        use ternary operator to catch error 
        */}
            {props.response? props.response.map(result => (
            
            <tr>
                <td><img alt = "" src = {result.picture.medium} className = "image" /></td>
                <td> {result.name.first +  " " + result.name.last} </td>
                <td> {result.phone} </td>
                <td> {result.email}</td>
                <td> {result.dob.date} </td>
            </tr>

        )):(<p>Loading, please wait...</p>) /*send message if api calls fails*/
        }
        </tbody>
    </table>
    );
}
export default Table;