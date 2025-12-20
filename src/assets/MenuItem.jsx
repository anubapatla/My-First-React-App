export const MenuItem =({name , price , onOrder}) =>{
    return(
        <div>
            <span>{name}</span>
            <button onClick={() => onOrder(name, price)}>order</button>
        </div>
    )
}