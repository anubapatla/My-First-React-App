import {useState} from 'react';
export const PrevStateCounter = () => {
    const[count,setCount] = useState(0);
     console.log("render phase:component rendering with count =",count);
     const handleClick = ()=>{
        setCount((prev) => {
        console.log("first undater fn: prev count:",prev);
        return prev+1;
        });
        setCount((prev) => {
        console.log("second updater fn: prev count:",prev);
        return prev +5;
        });
        setCount((prev) => {
        console.log("third updater fn: prev count:",prev);
        return prev +10;
      });
    };
    return<div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
         
    </div>
}