-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-08-2024 a las 20:07:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

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
-- Estructura de tabla para la tabla `carrito_compras`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `carrito_compras` (
  `id_carrito_compras` varchar(255) NOT NULL,
  `id_producto` varchar(255) NOT NULL,
  `id_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito_compras`
--

INSERT INTO `carrito_compras` (`id_carrito_compras`, `id_producto`, `id_usuario`) VALUES
('CAR2', 'P2', 'U2'),
('CAR3', 'P3', 'U1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_producto`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `categoria_producto` (
  `id_categoria_producto` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria_producto`
--

INSERT INTO `categoria_producto` (`id_categoria_producto`, `categoria`) VALUES
('CP1', 'Ropa'),
('CP2', 'Accesorios'),
('CP3', 'Productos de cuidado personal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `compra` (
  `id_compra` varchar(255) NOT NULL,
  `descripcion_C` varchar(255) NOT NULL,
  `precio_total` varchar(255) NOT NULL,
  `id_tipo_pago` varchar(255) NOT NULL,
  `id_producto` varchar(255) NOT NULL,
  `id_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `factura` (
  `id_factura` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `id_compra` varchar(255) NOT NULL,
  `id_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `producto` (
  `id_producto` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion_P` varchar(255) NOT NULL,
  `cantidad` int(255) NOT NULL,
  `id_categoria_producto` varchar(255) NOT NULL,
  `PrecioUnitario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion_P`, `cantidad`, `id_categoria_producto`, `PrecioUnitario`) VALUES
('P1', 'Camisetas Oversize', 'Camisetas con estampado y horma grande', 20, 'CP1', '78.000'),
('P2', 'Gorras', 'Gorras con diferentes estilos y variados colores', 10, 'CP2', '50.000'),
('P3', 'Aretes', 'Aretes, expaciones, simulaciones, etc.', 50, 'CP2', '20.000'),
('P4', 'Mascarillas', 'Mascarillas para puntos negros e hidratantes', 20, 'CP3', '15.000'),
('P5', 'Talcos para texturas', 'Para un texturizado de cabello mas visible', 10, 'CP3', '30.000'),
('P6', 'Pierncings', 'Piercings para la ceja, nariz, lengua, labio y de mas partes del cuerpo', 60, 'CP2', '20.000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recordatorio`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `recordatorio` (
  `id_recordatorio` varchar(255) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `id_ReservaTurno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva_turno`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `reserva_turno` (
  `id_ReservaTurno` varchar(255) NOT NULL,
  `id_tipo_servicio` varchar(255) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time(6) NOT NULL,
  `Aceptar_Turno` varchar(2) NOT NULL,
  `Cancelar_Turno` varchar(2) NOT NULL,
  `id_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `rol` (
  `id_rol` int(255) NOT NULL,
  `nombre_rol` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Barbero'),
(3, 'Cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_pago`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `tipo_pago` (
  `id_tipo_pago` varchar(255) NOT NULL,
  `TipoPago` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_pago`
--

INSERT INTO `tipo_pago` (`id_tipo_pago`, `TipoPago`) VALUES
('TP1', 'Tarjeta de credito'),
('TP2', 'Bancolombia'),
('TP3', 'Daviplata'),
('TP4', 'Nequi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_servicio`
--
-- Creación: 23-08-2024 a las 16:59:21
--

CREATE TABLE `tipo_servicio` (
  `id_tipo_servicio` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion_S` varchar(255) NOT NULL,
  `precio` varchar(255) NOT NULL,
  `id_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--
-- Creación: 28-08-2024 a las 16:20:12
-- Última actualización: 29-08-2024 a las 16:58:52
--

CREATE TABLE `usuarios` (
  `id_usuario` int(255) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `email` varchar(55) NOT NULL,
  `nit` int(55) NOT NULL,
  `telefono` int(55) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `id_rol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `email`, `nit`, `telefono`, `contrasena`, `id_rol`) VALUES
(1, 'FIDEL ESPITIA', 'fideljoseespi10@gmail.com', 1028662003, 2147483647, '$2a$10$Pply84z.7cmWQ174b.1tW.XgfSVP9IKfWOH7C/I//GjxBuf0BQenW', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  ADD PRIMARY KEY (`id_carrito_compras`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `categoria_producto`
--
ALTER TABLE `categoria_producto`
  ADD PRIMARY KEY (`id_categoria_producto`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `compra_ibfk_1` (`id_producto`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_tipo_pago` (`id_tipo_pago`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `id_compra` (`id_compra`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
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
-- Indices de la tabla `tipo_pago`
--
ALTER TABLE `tipo_pago`
  ADD PRIMARY KEY (`id_tipo_pago`);

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
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  ADD CONSTRAINT `carrito_compras_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `compra_ibfk_3` FOREIGN KEY (`id_tipo_pago`) REFERENCES `tipo_pago` (`id_tipo_pago`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id_compra`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria_producto`) REFERENCES `categoria_producto` (`id_categoria_producto`);

--
-- Filtros para la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  ADD CONSTRAINT `recordatorio_ibfk_1` FOREIGN KEY (`id_ReservaTurno`) REFERENCES `reserva_turno` (`id_ReservaTurno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva_turno`
--
ALTER TABLE `reserva_turno`
  ADD CONSTRAINT `reserva_turno_ibfk_1` FOREIGN KEY (`id_tipo_servicio`) REFERENCES `tipo_servicio` (`id_tipo_servicio`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
