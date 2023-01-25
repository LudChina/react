import{
   Link
  } from "react-router-dom"
function NavBar(){
    return(
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/registro">Registrarse</Link></li>
            <li><Link to="/login">Ingresar</Link></li>
        </ul>
    )
}

export default NavBar;