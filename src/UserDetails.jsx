export const UserDeails=({ name , isOnline, hideOffline ,isPremium ,isNewUser}) =>{
    if (hideOffline  && !isOnline ){
        return null;
    }
    
    return(
        <div>
            <h3>{name}
                {isPremium && <span> 😁 </span>}
                {isNewUser && <span>😈 </span>}
            </h3>
            <span> {isOnline ? "Online":"Offline"}</span>
            <p>{isOnline ? "Available for chat" :"Not available"}</p>
                {
                    isOnline?(
            <button> send message</button>
                    ):(
                        <small>check back later</small>
                    )
                }
        </div>
    );
};