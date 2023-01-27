
function Registro(){
    return(
    <form action="">
        <div>Nombre: <input type="text" placeholder="Escriba su nombre" /></div>
        <div>Apellido: <input type="text" placeholder="Escriba su apellido" /></div>
        <div>Email: <input type="email" placeholder="Ingrese su email"/></div>
        <div>Contraseña: <input type="password" /></div>
        <div>Confirmar contraseña: <input type="password" /></div>
        <button>Registrarme</button>
    </form>
    )
}

export default Registro;