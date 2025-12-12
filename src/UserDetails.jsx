export const UserDeails=({ name , isOnline, hideOffline}) =>{
    if (hideOffline  && !isOnline ){
        return null;
    }
    
    return(
        <div>
            <h3>{name}</h3>
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