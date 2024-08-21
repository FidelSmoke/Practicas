import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import AddBarberos from './pages/Admin/AddBarberos';
import Inventario from './pages/Admin/inventario'
import Perfil from './pages/Admin/Perfil';
import Inicio from './pages/Admin/Inicio';
import Login from './pages/Usuario/Login'
import Index from './pages/default/Index';
import Registro from './pages/Usuario/Registro';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            <Route exact path='/' element={<Index />}></Route>
            <Route exact path='/Inventario' element={<Inventario />}> </Route>
            <Route exact path='/Addbarberos' element={<AddBarberos />}> </Route>
            <Route exact path='/Perfil' element={<Perfil />}> </Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/Inicio' element={<Inicio />}> </Route>
            <Route exact path='/Registro' element={<Registro />}></Route>

          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
