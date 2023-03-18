import { useState } from "react";
import {useForm} from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase";
import AlertCustom from "../Components/AlertCustom";
import ButtonWithLoading from "../Components/ButtonWithLoading";

const styles = {
    button: {
      marginRight: '10px',
      background: 'pink',
      border: 'pink',
      fontWeight: 'bold',
    }
}

function Registro(){
    const {
        register,
        handleSubmit,
        formState: { errors },    
    } = useForm( { mode: "onChange"});
    const [alert, setAlert] = useState({ variant: "", text: "" });
    const [loading, setLoading] = useState(false);


    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        try{
           const respuestaUsuario = await firebase
           .auth()
           .createUserWithEmailAndPassword(data.email, data.password);
           console.log(
            "~ file: Registro.jsx:19 ~ onSubmit ~ respuestaUsuario",
            respuestaUsuario
           );
           if(respuestaUsuario.user.uid){
            const document = await firebase.firestore().collection("usuarios")
            .add({
                nombre:data.nombre,
                apellido:data.apellido,
                userId:respuestaUsuario.user.uid
            });
            if (document) {
                setAlert({
                    variant: "success",
                    text: "Gracias por registrarse",
                    duration: 3000,
                    link: "/login",  
                });
                setLoading(false);
            }
           }
        } catch(e) {
            console.log(e);
            setAlert({ variant: "danger", text: "Ha ocurrido un error" });
            setLoading(false);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                label="Nombre"
                register={{...register("nombre", {required: true})}}
                />
                {errors.nombre && (
                    <div>
                        <span>Este campo es requerido</span>
                    </div>
                )}

                <Input label="Apellido" register={{...register("apellido") }} />

                <Input
                label="Email"
                type="email"
                register={{...register("email", {required: true})}}
                />
                {errors.email && (
                    <div>
                        <span>Este campo es requerido</span>
                    </div>
                )}

                <Input
                label="Contraseña"
                type="password"
                register={{...register("password", {required: true, minLength: 6 }),
               }}
                />
                 {errors.password && (
                    <div>
                        {errors.password?.type === "required" && (
                        <span>Este campo es requerido</span>
                        )}
                         {errors.password?.type === "minLenght" && (
                        <span>Debe tener al menos 6 caracteres</span>
                        )}
                    </div>
                )}
                <ButtonWithLoading type="submit" variant="primary" loading={loading} style={styles.button}>
                 Registrarse
                </ButtonWithLoading>
            </Form>
            <AlertCustom
             {...alert}
            />
           </div>
    );
}

export default Registro;