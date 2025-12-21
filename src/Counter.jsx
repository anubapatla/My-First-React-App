import {useState} from "react";
export const Counter = ()=>{
    const[count ,setCount] =useState(0)
    //currentVAlues,setterfunction = useState(initialValue)
    console.log("counter rendered with count:",count);
    const handleClick = () =>{
        setCount(count + 1);
        console.log(count);
    };
    return<button onClick={handleClick}> Count:{count}</button>
};