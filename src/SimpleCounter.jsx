import {useState} from 'react';
export const SimpleCounter = () => {
    const[count,setCount] = useState(0);
     console.log("render phase:component rendering with count =",count);
     const handleClick = ()=>{
        setCount(count+1);
        console.log("after setCount(count+1),count is:",count);
        setCount(count+5);
        console.log("After setCount(count+5 ),count is:",count);
         setCount(count+10);
        console.log("after setCount(count+10),count is:",count);
       setTimeout(() =>{
        console.log("after 2 seconds,count is:",count);
       },2000);
    };
    return<div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
         
    </div>
}