import { useState } from "react"

export const TodoList =()=> {
   const[items,setItems] =useState([
        {id:1, text:"learn react"},
        {id:2, text:"build an app"},
    ]);
    console.log("rendering with items",items);
    const addItem =() =>{
        const newItem={
            id: Date.now(),
            text:"deploy to production",

        };
        //setItems([...items,newItem]);
        setItems(items.concat(newItem));
    };
    return(
        <div>
            <ul>
                {items.map((item)=>
                {return<li key={item.id}>{item.text}</li>;
            })}
            </ul>
            <button onClick={addItem}> add item</button>
        </div>
    );
};