-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-10-2024 a las 21:44:36
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `master_barber`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `addbarberos`
--

CREATE TABLE `addbarberos` (
  `id_barbero` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_producto`
--

CREATE TABLE `categoria_producto` (
  `id_categoria_producto` int(255) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria_producto`
--

INSERT INTO `categoria_producto` (`id_categoria_producto`, `categoria`) VALUES
(1, 'Ropa'),
(2, 'Accesorios'),
(3, 'Productos de cuidado personal'),
(4, 'Zapatos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `id_producto` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion_P` varchar(255) NOT NULL,
  `cantidad` int(255) NOT NULL,
  `id_categoria_producto` int(255) NOT NULL,
  `PrecioUnitario` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recordatorio`
--

CREATE TABLE `recordatorio` (
  `id_recordatorio` int(255) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `id_ReservaTurno` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva_turno`
--

CREATE TABLE `reserva_turno` (
  `id_ReservaTurno` int(255) NOT NULL,
  `id_tipo_servicio` int(255) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time(6) NOT NULL,
  `Aceptar_Turno` varchar(2) NOT NULL,
  `Cancelar_Turno` varchar(2) NOT NULL,
  `id_usuario` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(255) NOT NULL,
  `nombre_rol` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Barbero'),
(3, 'Cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_servicio`
--

CREATE TABLE `tipo_servicio` (
  `id_tipo_servicio` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion_S` varchar(255) NOT NULL,
  `precio` varchar(255) NOT NULL,
  `id_usuario` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(255) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `email` varchar(55) NOT NULL,
  `nit` int(55) NOT NULL,
  `telefono` varchar(55) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `id_rol` int(255) NOT NULL,
  `user_reset_code` varchar(7) DEFAULT NULL,
  `user_reset_code_expiration` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `email`, `nit`, `telefono`, `contrasena`, `id_rol`, `user_reset_code`, `user_reset_code_expiration`) VALUES
(5, 'Fidel Espitia ', 'fideljoseespi10@gmail.com', 1028662003, '3142758305', '$2a$10$Wu5aatNss9/D/N/DQ5v2uuvP9BhDL09q8/v8XQHUHUvjqCxQ6rCKG', 3, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `addbarberos`
--
ALTER TABLE `addbarberos`
  ADD PRIMARY KEY (`id_barbero`);

--
-- Indices de la tabla `categoria_producto`
--
ALTER TABLE `categoria_producto`
  ADD PRIMARY KEY (`id_categoria_producto`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_categoria_producto` (`id_categoria_producto`);

--
-- Indices de la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  ADD PRIMARY KEY (`id_recordatorio`),
  ADD KEY `id_ReservaTurno` (`id_ReservaTurno`);

--
-- Indices de la tabla `reserva_turno`
--
ALTER TABLE `reserva_turno`
  ADD PRIMARY KEY (`id_ReservaTurno`),
  ADD KEY `id_TipoServicio` (`id_tipo_servicio`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `tipo_servicio`
--
ALTER TABLE `tipo_servicio`
  ADD PRIMARY KEY (`id_tipo_servicio`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `addbarberos`
--
ALTER TABLE `addbarberos`
  MODIFY `id_barbero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categoria_producto`
--
ALTER TABLE `categoria_producto`
  MODIFY `id_categoria_producto` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `id_producto` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  MODIFY `id_recordatorio` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `producto categoria producto` FOREIGN KEY (`id_categoria_producto`) REFERENCES `categoria_producto` (`id_categoria_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  ADD CONSTRAINT `recordatorio reserva turno` FOREIGN KEY (`id_ReservaTurno`) REFERENCES `reserva_turno` (`id_ReservaTurno`);

--
-- Filtros para la tabla `reserva_turno`
--
ALTER TABLE `reserva_turno`
  ADD CONSTRAINT `reserva de turno` FOREIGN KEY (`id_ReservaTurno`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `reserva tipo servicio` FOREIGN KEY (`id_tipo_servicio`) REFERENCES `tipo_servicio` (`id_tipo_servicio`);

--
-- Filtros para la tabla `tipo_servicio`
--
ALTER TABLE `tipo_servicio`
  ADD CONSTRAINT `tipo servicio usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuario rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
