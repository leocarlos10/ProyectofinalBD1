-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2024 a las 22:15:26
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sgestion_am2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `idCita` int(11) NOT NULL,
  `fechahora` datetime NOT NULL,
  `servicio` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`idCita`, `fechahora`, `servicio`) VALUES
(21, '2024-12-01 09:30:00', 'lactancia materna'),
(22, '2024-12-04 11:30:00', 'Asesoria para alimentacion complementaria'),
(23, '2024-12-06 23:35:00', 'Visia Nutricion y dietética');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta`
--

CREATE TABLE `consulta` (
  `idConsulta` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `diagnostico` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `consulta`
--

INSERT INTO `consulta` (`idConsulta`, `fecha`, `diagnostico`) VALUES
(1, '2024-11-10', 'Diagnóstico de resfriado común'),
(2, '2024-11-10', 'Consulta de control para fiebre'),
(3, '2024-11-11', 'Diagnóstico de alergia estacional');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `idCurso` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `url_imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`idCurso`, `titulo`, `descripcion`, `url_imagen`) VALUES
(1, 'Curso de Pediatría General', 'Curso básico sobre pediatría y desarrollo infantil', 'img/img-nutricion.jpeg'),
(2, 'Curso de Urgencias Médicas', 'Curso avanzado en atención de urgencias pediátricas', 'img/img-nutricion2.jpeg'),
(3, 'Curso de Nutrición Infantil', 'Curso especializado en nutrición para niños y adolescentes', 'img/img-atencion.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genera`
--

CREATE TABLE `genera` (
  `id_cita` int(11) NOT NULL,
  `id_consulta` int(11) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `cedula` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `fechaUltValoracion` date NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `motivoC` text NOT NULL,
  `remitente` varchar(30) NOT NULL,
  `idcita` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`cedula`, `nombre`, `apellido`, `fechaNacimiento`, `telefono`, `fechaUltValoracion`, `ciudad`, `motivoC`, `remitente`, `idcita`) VALUES
(1063135804, 'leocarlos', 'ospina causil', '2004-03-10', '3113746267', '2024-05-05', 'Lorica', 'problemas nutricionales', 'instagram', 21),
(1064136809, 'braulio ', 'ospina', '2004-05-10', '3103108507', '2024-04-05', 'Lorica', 'problemas nutricionales', 'monica causil', 23),
(1065135809, 'monica', 'causil', '1990-04-10', '3126681930', '2024-05-30', 'Lorica', 'problemas maternales', 'pagina de instagram', 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pediatra`
--

CREATE TABLE `pediatra` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `especialidad` enum('pediatra','asistente') DEFAULT 'pediatra',
  `direccionConsultorio` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `horarioASem` time NOT NULL,
  `horarioAFSem` time NOT NULL,
  `pass` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`idCita`);

--
-- Indices de la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`idConsulta`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idCurso`);

--
-- Indices de la tabla `genera`
--
ALTER TABLE `genera`
  ADD PRIMARY KEY (`id_cita`,`id_consulta`),
  ADD KEY `fkid_cita` (`id_cita`),
  ADD KEY `fkid_consulta` (`id_consulta`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `fkidcita` (`idcita`);

--
-- Indices de la tabla `pediatra`
--
ALTER TABLE `pediatra`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `consulta`
--
ALTER TABLE `consulta`
  MODIFY `idConsulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pediatra`
--
ALTER TABLE `pediatra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `genera`
--
ALTER TABLE `genera`
  ADD CONSTRAINT `fkid_cita` FOREIGN KEY (`id_cita`) REFERENCES `cita` (`idCita`) ON DELETE CASCADE,
  ADD CONSTRAINT `fkid_consulta` FOREIGN KEY (`id_consulta`) REFERENCES `consulta` (`idConsulta`) ON DELETE CASCADE;

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `fkidcita` FOREIGN KEY (`idcita`) REFERENCES `cita` (`idCita`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
