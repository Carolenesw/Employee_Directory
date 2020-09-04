import React from "react";
// create table property to capture employee data
function Table(props) {
    return (
        <div>
            <tr>
                <td>
                <img src={props.imgURL} alt="" />
                </td>

                <td>{props.name}</td>
                <td>{props.phoneNum}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </div>
    )
}

export default Table;