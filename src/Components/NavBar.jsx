import{Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthContext } from "../Context/AuthContext";

const styles = {
  navBar: {
    background: 'pink',
    borderBottom: '1px solid black',
  }
}

function NavBar() {
    const { login, handleLogout, user } = useAuthContext();
    return(
    <>
        <Navbar expand="lg" style={styles.navBar}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {!login && (
              <>
              <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
              <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
              </>
            )}

            {login && (
              <>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/producto/alta">Alta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => handleLogout()}>Salir</Nav.Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
        {login && <div>Hola {user.nombre}</div>}
    </Navbar>
    </>
    );
}

export default NavBar;