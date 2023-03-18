import {useForm} from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { create } from "../Services/productoService";


const styles = {
    button: {
      marginRight: '10px',
      background: 'pink',
      border: 'pink',
      fontWeight: 'bold',
    }
}

function ProductosAlta(){
    const {
        register,
        handleSubmit,
        formState: { errors },    
    } = useForm( { mode: "onChange"});
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        console.log(data);
        try{
           const document = await create(data);
           if (document) {
            navigate("/");
           }
        } catch(e) {
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
                        <span>Este campo es requerido</span>
                    </div>
                )}

                <Input label="Precio" register={{...register("price") }} />
                <Input label="Description" register={{...register("description") }} />
                <Input label="Imagen" register={{...register("thumbnail") }} />
                <Button type="submit" variant="primary" style={styles.button}>GUARDAR</Button>
            </Form>
        </div>
    );

}

export default ProductosAlta;