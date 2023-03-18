import {Button,Form} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import Input from "../Components/Input";
import firebase from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { getByUserId } from "../Services/usuariosServices";

const styles = {
      button: {
        marginRight: '10px',
        background: 'pink',
        border: 'pink',
        fontWeight: 'bold',
      }
}

function Login() {
  const {
      register,
      handleSubmit,
      formState: { errors },    
  } = useForm( { mode: "onChange"});
  const { handleLogin } = useAuthContext();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const respuestaUsuario = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email,data.password);
      if (respuestaUsuario.user.uid) {
      const user = await getByUserId(respuestaUsuario.user.uid);
      handleLogin(user.docs[0].data());

      navigate("/");
    }
  }
    catch(e) {
      console.log(e);
    }
  };


  return (
      <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Button type="submit" variant="primary" style={styles.button}>Ingresar</Button>
          </Form>
      </div>
  );

}


export default Login;