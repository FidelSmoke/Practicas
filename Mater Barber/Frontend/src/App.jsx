import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import AddBarberos from './pages/Admin/AddBarberos';
import Inventario from './pages/Admin/inventario';
import Perfil from './pages/Admin/Perfil';
import InicioAdmin from './pages/Admin/InicioAdmin';
import Login from './pages/Usuario/Login'
import Index from './pages/default/Index';
import Registro from './pages/Usuario/Registro';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import Dashboard from './pages/AdminDos/Dashboard';
import GestionarBarberos from './pages/AdminDos/GestionarBarberos';
import Inicio2 from './pages/AdminDos/Inicio2';
import Inventario2 from './pages/AdminDos/Inventario2';
import HrsBarberos from './pages/AdminDos/HrsBarberos';
function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            <Route exact path='/' element={<Index />}></Route>
            <Route exact path='/Ventas' element={<Ventas />}></Route>
            <Route exact path='/Inicio2' element={<Inicio2/>}></Route>
            <Route exact path='/Inventario2' element={<Inventario2/>}></Route>
            <Route exact path='/HrsBarberos' element={<HrsBarberos/>}></Route>
            <Route exact path='/GestionarBarberos' element={<GestionarBarberos />}></Route>
            <Route exact path='/Dashboard' element={<Dashboard />}></Route>
            <Route exact path='/Inventario' element={<Inventario />}> </Route>
            <Route exact path='/Addbarberos' element={<AddBarberos />}> </Route>
            <Route exact path='/Perfil' element={<Perfil />}> </Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/InicioAdmin' element={<InicioAdmin />}> </Route>
            <Route exact path='/Registro' element={<Registro />}></Route>
            <Route exact path='/ResetPass' element={<ResetPass />}></Route>

          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
