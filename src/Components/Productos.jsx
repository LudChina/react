import React, {useEffect, useState} from "react";
import Producto from "./Producto";
import { getAll } from "../Services/productoService";
import Row from 'react-bootstrap/Row';
import Loading from "../Components/Loading";
import { useFetchProducts } from "../Utils/useFetchProducts";



function Productos(){
    const [compra,setCompra] = useState (false);
    const { productos, loading, buscar, setBuscar } = useFetchProducts();
    
    const handleComprar = () => {
      setCompra(true);
    };
    
    return (
      <Loading loading={loading}>
        <div className="">
          <h1>Productos</h1>
        <input
                type="text"
                value={buscar}
                onChange={(event) => setBuscar(event.target.value)}
              />
              <Row>
                {productos.map((producto) => (
                  <Producto
                    {...producto.data()}
                    key={producto.id}
                    id={producto.id}
                    comprar={handleComprar}
                  />
                ))}
              </Row>
        </div>
      </Loading>
    );
  }
      

export default Productos;