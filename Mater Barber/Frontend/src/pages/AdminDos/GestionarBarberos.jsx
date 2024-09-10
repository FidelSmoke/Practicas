import React from 'react'
import NavbarAdmin from '../../Components/NavbarAdmin'
import SidebarAdmin from '../../Components/SidebarAdmin'
import Swal from 'sweetalert2'



export default function GestionarBarberos() {
  return (
    <div>
      <NavbarAdmin />
      <SidebarAdmin />
      <div className='contenido2'>
        <p className='text-center  mt-5 text-white display-6 bebas col-sm-12 col'>HOLA, <span className='text-danger'>ADMINISTRADOR</span> |AQUI PODRAS EDITAR, AÑADIR Y ELIMINAR BARBEROS</p>

        <div className="d-flex justify-content-end mt-3 p-5 mx-5">
          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#AñadirModal" data-bs-whatever="@mdo" >Añadir</button>
        </div>

        <div className=' text-center row col col-sm-12 justify-content-end'>
          <div className="table-responsive">
            <table class="table table-dark table-hover mt-4 container p-5">
              <thead>
                <tr className='bg-white'>
                  <th scope="col" className='p-2 display-6 bebas'>Nombre</th>
                  <th scope="col" className='p-2 display-6 bebas w-50'>Descripcion</th>
                  <th scope="col" className='p-2 display-6 bebas'>imagen Barbero</th>
                  <th scope="col" className='p-2 text-warning display-6 bebas'>Acciones</th>
                </tr>
              </thead>
              <tbody className='p-5'>
                <tr>
                  <th scope="row" className='display-6 bebas'>DEIBY</th>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda vero minima accusantium eveniet atque temporibus libero nam ab, ex, ratione veritatis dolorem explicabo, deleniti quod? Saepe sunt minus vel.</td>
                  <td><img src="/B1.JPG" alt="" srcset="" className='zoomhover containerzoom col-md-2 col-sm-12 mt-3 img-fluid' /></td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "¡Si, eliminar!",
                        cancelButtonText: "Cancelar"
                      }).then(
                        (result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
                              icon: 'success',
                              confirmButtonText: 'Hecho'
                            })
                          }
                        }
                      )
                    }}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
                <tr>
                  <th scope="row" className='display-6 bebas'>JEISON</th>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda vero minima accusantium eveniet atque temporibus libero nam ab, ex, ratione veritatis dolorem explicabo, deleniti quod? Saepe sunt minus vel.</td>
                  <td><img src="/B2.JPG" alt="" srcset="" className='col-md-2 col-sm-12 mt-3 img-fluid zoomhover containerzoom ' /></td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "¡Si, eliminar!",
                        cancelButtonText: "Cancelar"
                      }).then(
                        (result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
                              icon: 'success',
                              confirmButtonText: 'Hecho'
                            })
                          }
                        }
                      )
                    }}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
                <tr>
                  <th scope="row" className='display-6 bebas'>NIXON</th>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda vero minima accusantium eveniet atque temporibus libero nam ab, ex, ratione veritatis dolorem explicabo, deleniti quod? Saepe sunt minus vel.</td>
                  <td><img src="/B3.JPG" alt="" srcset="" className='col-md-2 col-sm-12 mt-3 img-fluid zoomhover containerzoom ' /></td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "¡Si, eliminar!",
                        cancelButtonText: "Cancelar"
                      }).then(
                        (result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
                              icon: 'success',
                              confirmButtonText: 'Hecho'
                            })
                          }
                        }
                      )
                    }}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
                <tr>
                  <th scope="row" className='display-6 bebas'>CAMILO</th>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda vero minima accusantium eveniet atque temporibus libero nam ab, ex, ratione veritatis dolorem explicabo, deleniti quod? Saepe sunt minus vel.</td>
                  <td><img src="/LOGO.png" alt="" srcset="" className='col-md-2 col-sm-12 mt-3 img-fluid zoomhover containerzoom' /></td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "¡Si, eliminar!",
                        cancelButtonText: "Cancelar"
                      }).then(
                        (result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
                              icon: 'success',
                              confirmButtonText: 'Hecho'
                            })
                          }
                        }
                      )
                    }}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
                <tr>
                  <th scope="row" className='display-6 bebas'>CRISTIAN</th>
                  <td className='col-md-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda vero minima accusantium eveniet atque temporibus libero nam ab, ex, ratione veritatis dolorem explicabo, deleniti quod? Saepe sunt minus vel.</td>
                  <td><img src="/LOGO.png" alt="" srcset="" className='col-md-2 col-sm-12 mt-3 img-fluid zoomhover containerzoom' /></td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "¡Si, eliminar!",
                        cancelButtonText: "Cancelar"
                      }).then(
                        (result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
                              icon: 'success',
                              confirmButtonText: 'Hecho'
                            })
                          }
                        }
                      )
                    }}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
                <tr>
                  <th scope="row" className='display-6 bebas'>JORGE</th>
                  <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda vero minima accusantium eveniet atque temporibus libero nam ab, ex, ratione veritatis dolorem explicabo, deleniti quod? Saepe sunt minus vel.</td>
                  <td><img src="/LOGO.png" alt="" srcset="" className='col-md-2 col-sm-12 mt-3 img-fluid zoomhover containerzoom' /></td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "¡Si, eliminar!",
                        cancelButtonText: "Cancelar"
                      }).then(
                        (result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
                              icon: 'success',
                              confirmButtonText: 'Hecho'
                            })
                          }
                        }
                      )
                    }}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* MODAL EDIT */}

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-white text-white" id="exampleModalLabel">EDITAR</h1>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Nombre Barbero</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Descripcion</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                    <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='photo' required />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                  Swal.fire({
                    title: "¿Estas Seguro De Terminar Este Proceso?",
                    text: "¡Se Borrara Todo Lo Editado!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "¡Si, Cerrar!",
                    cancelButtonText: "Cancelar"
                  }).then(
                    (result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: 'Cerrado',
                          text: 'Se Ah Cerrado Correctamente.',
                          icon: 'success',
                          confirmButtonText: 'Hecho'
                        })
                      }
                    }
                  )
                }}>Close</button>
                <button type="button" class="btn btn-danger" onClick={() => {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Se Ah Editado Correctamente",
                    showConfirmButton: false,
                    timer: 1500
                  })
                }}>Editar</button>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL AÑADIR */}

        <div class="modal fade" id="AñadirModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-white text-white" id="exampleModalLabel">Añadir</h1>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Nombre Barbero</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Descripcion</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                    <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='photo' required />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                  Swal.fire({
                    title: "¿Estas Seguro De Terminar Este Proceso?",
                    text: "¡Se Borrara Todo Lo Anterior!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "¡Si, Cerrar!",
                    cancelButtonText: "Cancelar"
                  }).then(
                    (result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: 'Cerrado',
                          text: 'Se Ah Cerrado Correctamente.',
                          icon: 'success',
                          confirmButtonText: 'Hecho'
                        })
                      }
                    }
                  )
                }}>Close</button>
                <button type="button" class="btn btn-danger" onClick={() => {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Se Ah Añadido Correctamente",
                    showConfirmButton: false,
                    timer: 1500
                  })
                }}>Añadir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
