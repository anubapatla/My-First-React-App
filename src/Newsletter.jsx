import { ActionButton } from "./ActionButton"

export const Newsletter =()=>{
    const handleSubscribe =()=>{
        alert("thanks you for subscribing");
    };
    return(
        <div>
            <h2>subscibe to newsletter</h2>
             <ActionButton text="Subscribed" onClick={handleSubscribe}/>
        </div>
    );
};