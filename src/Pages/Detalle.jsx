import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, getDescription } from "../Services/productoService";
import { Link } from "react-router-dom";

function Detalle (){
    const { productoId }= useParams();
    const [producto,setProducto] = useState({})
    const [description,setDescription] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const request = async ()=>{
            try{
                const responseProducto = await getById (productoId);
                setProducto (responseProducto)
                const responseDescription = await getDescription (productoId);
                setDescription (responseDescription)
                setLoading(false);
            }catch(e){
                console.log(e)
            }
        }
        request()
    }, [productoId]);

 /*   useEffect(() => {
        getById (productoId)
        .then( (response) => {
            console.log(response);
            setProducto(response);
        })
    .catch((e) => console.log(e))
    .finally((e) => setLoading(false));
}, []); */

    if(loading){
        return <div>Cargando...</div>;
    }
    return (
    <div>
        <h2>{producto.title}</h2>
        <p>{description.plain_text}</p>
        <img src={producto.thumbnail}  alt="" />
        <p>{producto.condition}</p>
        <p>${producto.price}</p>
        <button><Link to="/login">COMPRAR</Link></button>
        <button><Link to="/">Volver</Link></button>
    </div>
    );    
}

export default Detalle;