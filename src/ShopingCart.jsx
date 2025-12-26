import { useState } from "react";
export const ShoppingCart =()=>{
    const[cartItems,setCartItems]= useState ({
        reactCourse:0,
        vueCourse:0,
    });
    const prices ={
        reactCourse:49.99,
        vueCourse:39.99,
    };
    const handleAddReactCourse =()=>{
        setCartItems({
            ...cartItems,
            reactCourse: cartItems.reactCourse +1,
        });
    };
     const handleAddVueCourse =()=>{
        setCartItems({
            ...cartItems,
            vueCourse: cartItems.vueCourse +1,
        });
     } ;  
     const clearCart=()=>{
        setCartItems({
            reactCourse:0,
            vueCourse:0,
        })
     }
    
    return(
        <div>
            <h3>ShoppingCart component</h3>
            <ProductCard
            name="React Course"
            price={prices.vueCourse}
            quantity={cartItems.reactCourse}
            onAddToCart={handleAddReactCourse}
            />
            <ProductCard
            name="Vue Course"
            price={prices.vueCourse}
            quantity={cartItems.vueCourse}
            onAddToCart={handleAddVueCourse}
            />
            <CartSummary cartItems={cartItems} prices={prices} />
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
}
export const ProductCard =({name,price,quantity,onAddToCart}) =>{
   // const [quantity ,setQuantity]= useState(0);
    return(
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>quantity: {quantity}</p>
            <button onClick ={onAddToCart}>Add to cart </button>
        </div>
    );
};
export const CartSummary =({cartItems , prices}) =>{
    const totalItems = cartItems.reactCourse + cartItems.vueCourse;
    const totalPrice =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;
    return (
        <div>
            <h3>cart summary</h3>
            <p>total items:{totalItems}</p>
            <p>total price:${totalPrice.toFixed(2)}</p>
        </div>
    );
};