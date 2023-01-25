import logo from './logo.svg';
import './App.css';
import Productos from './Productos';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Registro from './Registro';
import Login from './Login';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Productos />} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
