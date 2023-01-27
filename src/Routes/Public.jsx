import Home from '../Pages/Home';
import{Routes,Route} from "react-router-dom"
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import NavBar from '../Components/NavBar';
import Detalle from '../Pages/Detalle';

function Public(){
    return(
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/producto/:productoId' element={<Detalle/>} />
        </Routes>
      </>
    )
}

export default Public;