export const UserDeails=({ name , isOnline, hideOffline}) =>{
    if (hideOffline  && !isOnline ){
        return null;
    }
    if(isOnline)
{
    return(
        <div>
            <h3>{name}</h3>
            <span> online</span>
            <p> Available for chat</p>
            <button> send message</button>
        </div>
    );
}
return(
    <div>
    <h3>{name}</h3>
            <span> online</span>
            <p> No Available for chat</p>
            <button> check back later</button>
    </div>
);
};