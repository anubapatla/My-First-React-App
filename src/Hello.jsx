import React from "react";
export const Hello =()=>{
    return( <div id="container">
        <h1> react 19</h1>
    </div>
    );
};
export const HelloWithoutJSX =()=>{
    return React.createElement("div",
        {id:"container"},
        React.createContext("h1",null,"hello worls"));
    
};