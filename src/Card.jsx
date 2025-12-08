import React from "react";
export const Card=()=>{
    return(
        <div id="card">
            <h2>Welcome</h2>
            <p> this isa a <span id="highlight">PARAGRAPH</span></p>
            <button>Click me</button>
        </div>
    );
};
//without jsx getting messy!
export const CardWithoutJSX =()=>{
    return React.createElement(
        "div",
        {id:"card"},
        React.createElement("h2",null,"Welcome"),
    React.createElement(
        "p",null,
        "this is a",
        React.createElement("spam",{"id":"highlight"},"paragraph"),
        "with text"
    ),
        React.createElement("button",null,"Click me")
    );
};
