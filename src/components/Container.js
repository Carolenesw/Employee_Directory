import React from "react";

function Container(props) {
    return <container>
        <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}
        </div>
    </container>
}

export default Container;