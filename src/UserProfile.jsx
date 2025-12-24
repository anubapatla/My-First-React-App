import { useState } from "react"

export const Userprofile =()=>{
    const [user,setUser]= useState({
    
        name:"anusha",
        age:36,
        email:"anusri@gmail.com",
    });
    console.log("component rendering,user:",user);
    const updateName =()=>{
        setUser({
            ...user,
            name: "srinu",
        });
    };
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          <button onClick={ updateName}>change name to srinu</button>
        </div>
    );
};