import Home from "../Pages/Home";
import{Routes,Route} from "react-router-dom";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import NavBar from "../Components/NavBar";
import Detalle from "../Pages/Detalle";
import Container from "react-bootstrap/Container";
import ProductosAlta from "../Pages/ProductosAlta";
import ProductosModificar from "../Pages/ProductosModificar";
import AuthProvider from "../Context/AuthContext";

function Public(){
    return(
      <>
      <AuthProvider>
        <NavBar />
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/producto/:productoId" element={<Detalle/>} />
          <Route path="/producto/editar/:productoId" element={<ProductosModificar/>} />
          <Route path="/producto/alta" element={<ProductosAlta/>} />
        </Routes>
        </Container>
        </AuthProvider>
      </>
    );
}

export default Public;