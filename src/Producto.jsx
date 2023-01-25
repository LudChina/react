import React from "react";

function Producto({title,descripcion,thumbnail,price,sku,condition,compra}){
    return(
        <div>
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <img src={thumbnail} alt="" />
            <p>${price}</p>
            <p>SKU:{sku}</p>
            <p>Condición:{condition}</p>
            <button onClick={compra}>COMPRAR</button>
        </div>
    )
}




export default Producto;