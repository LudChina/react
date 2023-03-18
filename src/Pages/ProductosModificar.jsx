import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getById, remove, update } from "../Services/productoService";


const styles = {
    button: {
      marginRight: '10px',
      background: 'pink',
      border: 'pink',
      fontWeight: 'bold',
    }
}

function ProductosModificar(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,    
    } = useForm( { mode: "onChange"});
    const navigate = useNavigate();
    const {productoId} = useParams();


    useEffect(() => {
        const request = async () => {
            try{
                const responseProducto = await getById(productoId);
                setValue("title", responseProducto.data().title);
                setValue("price", responseProducto.data().price);
                setValue("description", responseProducto.data().description);
                setValue("thumbnail", responseProducto.data().thumbnail);
                } catch (e) {
                    console.log(e);
                }
        };
        request();
    }, [productoId]);

    const onSubmit = async (data) => {
        console.log(data);
        try{
            const document = update(productoId, data);

            if (document) {
                navigate("/");
            }
        } catch(e){
            console.log(e);
        }
    };
    
    const handleDelete = () => {
        try {
            const document = remove(productoId);
            if (document) {
                navigate("/");
            }
        }  catch (e){
            console.log(e);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                label="Nombre"
                register={{...register("title", {required: true})}}
                />
                {errors.nombre && (
                 <div>
                     <span>Este espacio es requerido</span>
                 </div>
                )}
                <Input label="Precio" register={{...register("price") }} />
                <Input label="Descripción" register={{...register("description") }} />
                <Input label="Imagen" register={{...register("thumbnail") }} />
                <Button type="submit" variant="primary" style={styles.button}>GUARDAR</Button>
                <Button type="submit" variant="danger" style={styles.button} onClick={handleDelete}>Eliminar</Button>
            </Form>
        </div>
    );

}

export default ProductosModificar;