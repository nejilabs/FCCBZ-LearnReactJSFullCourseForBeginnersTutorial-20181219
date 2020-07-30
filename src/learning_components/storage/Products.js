import React from "react";

function Products({product}){
  return(
    <products>
      <h1>{product.name}</h1>
      <p>${product.price} - {product.description}</p>
    </products>
  ) 
}
export default Products;
