import React, {useEffect, useState} from "react";
import Producto from "./Producto";

function Productos(){
    const [compra,setCompra] = useState (false)
    const [productos,setProductos] = useState ([])
    
    useEffect (() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=jackiesmith")
        .then (res=> res.json())
        .then(data=> {
        console.log(data);
        setProductos(data?.results);
      });

    }, []);
    

    const handlecomprar = () => {
        setCompra(true);
    };

    if (compra) {
        return <div>¡Gracias por su compra!</div>;
    } else{
    return(
        <div>
            <h1>Productos</h1>
            {productos.map((producto) => (
                 < Producto
                  title={producto.title}
                  descripcion={producto.descripcion}
                  thumbnail={producto.thumbnail}
                  price={producto.price}
                  sku={producto.sku}
                  condition={producto.condition}
                  compra={handlecomprar}
                  />))}
        
        </div>
    );
    }
}

export default Productos;