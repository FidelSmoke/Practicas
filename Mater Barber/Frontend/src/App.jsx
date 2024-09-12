import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './pages/Usuario/Login'
import Index from './pages/default/Index';
import Registro from './pages/Usuario/Registro';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import GestionarBarberos from './pages/AdminDos/GestionarBarberos';
import Inventario from './pages/AdminDos/Inventario';
import HrsBarberos from './pages/AdminDos/HrsBarberos';
import InicioAdmin from './pages/AdminDos/InicioAdmin';
import Analisisdeventas from './pages/AdminDos/Analisisdeventas';
import Gestiondeventas from './pages/AdminDos/Gestiondeventas';
import EnvEmail from './pages/default/EnvEmail';
import Cambiarpasscod from './pages/default/Cambiarpasscod';
function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            <Route exact path='/' element={<Index />}></Route>
            <Route exact path='/analisisdeventas' element={<Analisisdeventas />}></Route>
            <Route exact path='/InicioAdmin' element={<InicioAdmin />}></Route>
            <Route exact path='/Inventario' element={<Inventario />}></Route>
            <Route exact path='/HrsBarberos' element={<HrsBarberos />}></Route>
            <Route exact path='/GestionarBarberos' element={<GestionarBarberos />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/Registro' element={<Registro />}></Route>
            <Route exact path='/EnvEmail' element={<EnvEmail />}></Route>
            <Route exact path='/Gestiondeventas' element={<Gestiondeventas />}></Route>
            <Route exact path='/cambiarpasscod' element={<Cambiarpasscod/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
