import { useState } from "react";
import Input from "../Components/Input";

function Registro(){
    const [form, setForm] = useState({nombre:'', apellido:'',email:'',password:''})
    //const [nombre, setNombre] = useState("");
    //const [apellido, setApellido] = useState("");
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");

    const registrarse = (event) => {
        console.log (form);
        event.preventDefault();
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({
            ...form,
            [name]: value,
        })
    }

    return(
    <form onSubmit={registrarse}>
        <Input label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Escriba su nombre"/>
        <Input label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} placeholder="Escriba su apellido"/>
        <Input label="Email" type="Email" name="email" value={form.email} onChange={handleChange} placeholder="Ingrese su email"/>
        <Input label="Password" type="Password" name="password" value={form.password} onChange={handleChange} placeholder="Escriba su contraseña"/>
        <button type="submit">Registrarme</button>
    </form>
    )
}

export default Registro;