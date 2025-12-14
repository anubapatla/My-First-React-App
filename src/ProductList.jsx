export const ProductList =()=>{
    const products =[
        {id:1,name:"Laptop",price:999},
         {id:2,name:"phone",price:799},
          {id:3,name:"Tablet",price:599},  
           {id:4,name:"Watch",price:399},
            {id:5,name:"Headphone",price:199},  
        ];
     const productElements = products.filter((product)=>{
        return product.price >500;
     })
     .map((product)=>
    {
        return(
            <div>
                <h3>{(product.name)}</h3>
            <p> Price:${product.price}</p>
            </div>
        );
    });
    return(
        <div>
            <h2> Our products </h2>
             {productElements}
            </div>
    );
};