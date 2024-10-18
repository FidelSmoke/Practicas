import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, roles, ...rest }) => {
  const currentUser = JSON.parse(localStorage.getItem('user')); // Suponiendo que guardas el token y rol en localStorage

  if (!currentUser) {
    // Si no hay usuario autenticado, redirigir al login
    return <Navigate to="/Login" />;
  }

  if (!roles.includes(currentUser.role)) {
    // Si el rol del usuario no está permitido, redirigir a una página de acceso denegado
    return <Navigate to="/access-denied" />;
  }

  // Si todo está bien, renderizar el componente
  return <Component {...rest} />;
};

export default PrivateRoute;
