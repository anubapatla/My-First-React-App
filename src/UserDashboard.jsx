import { useState } from "react";
export const UserDashboard =({ isPremium}) =>{
    const [credits,setCredits] = useState(100);
    if (!isPremium){
        return<div> upgrade to premium to see credits</div>;
    }
    return(
        <div>
            <p>
                you have {credits} credits
            </p>
            <button onClick={ () =>setCredits(0)}>spend all credits</button>
        </div>
    );
};