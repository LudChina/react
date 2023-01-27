import React from "react";
import{Link} from "react-router-dom";

function Producto({id,title,descripcion,thumbnail,price,condition,compra}){
    return(
        <div>
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <img src={thumbnail} alt="" />
            <p>${price}</p>
            <p>Condición:{condition}</p>
            <button onClick={compra}>COMPRAR</button>
            <button><Link to={`/producto/${id}`}>Ver detalle</Link></button>
        </div>
    );
}

export default Producto;