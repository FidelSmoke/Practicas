import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Registro() {

    // axios.defaults.withCredentials = true

    // const navigate = useNavigate();
  
    // const [user, setUser] = useState({
    //   nombre_usuario: "",
    //   email: "",
    //   nit:"",
    //   telefono:"",
    //   contraseña: "",
    //   confirmar_contraseña: ""
  
    // });
  
    // const handleChange = (e) => {
    //   setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // }
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const res = await axios.post("http://localhost:8080/registro", user);
    //     if (res.status === 200) {
    //       Swal.fire({
    //         title: 'Cuenta creada',
    //         text: 'Cuenta creada correctamente',
    //         icon: 'success',
    //         confirmButtonText: 'Continuar'
    //       });
    //       navigate("/Login");
    //     }
    //   } catch(error){
    //     console.log(error);
    //     if(error.response){
    //       Swal.fire({
    //         title: error.response.data || 'Credenciales incorrectas',
    //         icon: 'error',
    //         confirmButtonText: 'Intentar de nuevo'
    //       });
    //     }
    //   }
    // } 
    return (
        <div className="container">

        </div>
    )
}