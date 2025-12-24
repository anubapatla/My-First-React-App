import { useState } from "react"

export const Userprofile =()=>{
    const [user,setUser]= useState({
    
        name:"anusha",
        age:36,
        email:"anusri@gmail.com",
        address:{
            city :"whitby",
            country:"usa",
        }
    });
    console.log("component rendering,user:",user);
    const updateName =()=>{
        setUser({
            ...user,
            name: "srinu",
        });
    };
    const updateAge = ()=>{
        setUser({
            ...user,
            age:user.age + 1,
        });
    };
    const updateMultiple = ()=>{
        setUser({
            ...user,
            name:"srinu",
            age:"31",
            email:"anusha@gmail.com",
        });
    };
    const updateCity =()=>{
        setUser({
            ...user,
            address:{
                ...user.address,
                city:"metropolis"
            }
        });
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City:{user.address.city}</p>
            <p>Country:{user.address.country}</p>
          <button onClick={ updateName}>change name to srinu</button>
          <button onClick={updateAge}> increase age by 1 </button>
          <button onClick={updateMultiple}> change email to anusha@gmail.com </button>
          <button onClick={updateCity}>move to metropolis</button> 
        </div>
    );
};