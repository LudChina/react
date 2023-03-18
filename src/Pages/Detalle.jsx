import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productoService";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Loading from "../Components/Loading";

const styles = {
    buttons: {
        marginRight: '10px',
        background: 'pink',
        border: 'pink',
        fontWeight: 'bold',
    },
}

function Detalle (){
    const { productoId }= useParams();
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);

    const test = 1;

    useEffect(()=>{
        const request = async () => {
            try{ 
                const responseProducto = await getById (productoId);

                setProducto (responseProducto.data());
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        console.log(test);
        request();
    }, [productoId]);

    return (
    <Loading loading={loading}>
      <div>
        <h2>{producto.title}</h2> 
        <p>{producto.description}</p>
        <img src={producto.thumbnail}  alt="" />
        <p>${producto.price}</p>
        <Button variant="primary" as={Link} to={`/login`} style={styles.buttons}>COMPRAR</Button>
        <Button variant="primary" as={Link} to={`/`} style={styles.buttons}>Volver</Button>
      </div>
    </Loading>
    );    
}

export default Detalle;