import {useState} from 'react';
export const BatchingCounter = () => {
    const[count,setCount] = useState(0);
    const[name, setName] =useState("")
    const[isActive, SetIsActive]=useState(false);
     console.log("render phase:component rendering ");
     const handleClick = ()=>{
        setCount((prev) => {
        return prev+1;
        });
        setCount((prev) => {
        return prev +5;
        });
        setCount((prev) => {
        return prev +10;
      });
      setName("Updated all");
      SetIsActive(true);
    };
    return<div>
        <h2> Count:{count}</h2>
        <p> Name: {name}</p>
        <p> Active:{isActive ? "yes" : "No" }</p>
        <button onClick={handleClick}>update all three</button>
         
    </div>
}