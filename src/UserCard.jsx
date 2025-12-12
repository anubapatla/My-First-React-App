import { UserInfo } from "./UserInfo.jsx";
export const UserCard =({name ,age, city,email}) =>{
    return(
        <div>
            <h2> User Details</h2>
            <UserInfo name={name} age={age} city={city} email={email}/>
        
        </div>
    )
}