import React, {useEffect, useState} from "react";
import Producto from "./Producto";

function Productos(){
    const [compra,setCompra] = useState (false)
    const [productos,setProductos] = useState ([])
    const [buscar,setBuscar] = useState ('jackiesmith')
    
    useEffect (() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`)
        .then (res=> res.json())
        .then(data=> {
        console.log(data);
        setProductos(data?.results);
      });

    }, [buscar]);
    

    const handlecomprar = () => {
        setCompra(true);
    };

    if (compra) {
        return <div>¡Gracias por su compra!</div>;
    } else{
    return(
        <div>
            <h1>Productos</h1>
            <input type="text" value={buscar} onChange={(event)=>setBuscar(event.target.value)}/>
            {productos.map((producto) => (
                <Producto
                 id={producto.id}
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