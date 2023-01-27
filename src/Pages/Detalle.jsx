import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, getDescription } from "../Services/productoService";

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
        <p>${producto.price}</p>
        <p>{producto.warranty}</p>
    </div>
    );    
}

export default Detalle;