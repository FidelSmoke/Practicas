import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from '../src/Components/Sidebar'
import Home from './pages/Home'
import Sales from './pages/Sales'
import Clients from './pages/Clients'
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <div className='content w-100'>
        <Navbar />
          <Routes>
            <Route exact path='*' element={<Navbar />}></Route>
            <Route exact path='/' element={<Home />}> </Route>
            <Route exact path='/sales' element={<Sales />}> </Route>
            <Route exact path='/clients' element={<Clients />}> </Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
