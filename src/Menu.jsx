import { MenuItem } from "./assets/MenuItem";
export const Menu = () =>{
    const handleOrder =(itemName , itemPrice) =>{
        alert(`you ordered:${itemName} for ${itemPrice}`);
    };
    return(
        <div>
            <h2>our menu</h2>
            <MenuItem name="pizza" price={10} onOrder={handleOrder}/>
            <MenuItem name="pasta" price={12} onOrder={handleOrder}/>
            <MenuItem name="salad" price={8} onOrder={handleOrder}/>


        </div>
    )
}