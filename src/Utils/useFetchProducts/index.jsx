import { useEffect, useState } from "react";
import { getAll } from "../../Services/productoService";


export const useFetchProducts = ()=>{
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const [buscar, setBuscar] = useState("jackiesmith");

    useEffect(() => {
        const request= async () => {
            try {
                const response = await getAll(buscar);

                console.log(response);
                setProductos(response);
                setLoading(false);
            } catch (e) {
                console.log (e);
            }
        };
        request();
    }, [buscar]);

    return{
        productos,
        loading,
        buscar,
        setBuscar
    }
}