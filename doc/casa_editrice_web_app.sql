-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 16, 2022 alle 17:03
-- Versione del server: 10.4.18-MariaDB
-- Versione PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `casa_editrice_web_app`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `amministratore`
--

CREATE TABLE `amministratore` (
  `id_amministratore` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `amministratore`
--

INSERT INTO `amministratore` (`id_amministratore`, `username`, `password`) VALUES
(4, 'Cris', '25d55ad283aa400af464c76d713c07ad'),
(5, 'Bob', '25d55ad283aa400af464c76d713c07ad');

-- --------------------------------------------------------

--
-- Struttura della tabella `autore`
--

CREATE TABLE `autore` (
  `id_autore` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `data_nascita` date DEFAULT NULL,
  `stato_provenienza` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `autore`
--

INSERT INTO `autore` (`id_autore`, `nome`, `cognome`, `data_nascita`, `stato_provenienza`) VALUES
(1, 'Marco', 'Rossi', '1234-12-12', 'Italia'),
(2, 'Matteo', 'Rossini', '0000-00-00', 'Montenegro');

-- --------------------------------------------------------

--
-- Struttura della tabella `catalogo_libri`
--

CREATE TABLE `catalogo_libri` (
  `id_catalogo_libri` int(11) NOT NULL,
  `id_autore` int(11) NOT NULL,
  `titolo` varchar(255) NOT NULL,
  `genere` varchar(255) NOT NULL,
  `anno` int(11) NOT NULL,
  `ISBN` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `catalogo_libri`
--

INSERT INTO `catalogo_libri` (`id_catalogo_libri`, `id_autore`, `titolo`, `genere`, `anno`, `ISBN`) VALUES
(2665, 2, 'La mamma', 'Thriller', 1998, '324567'),
(2666, 2, 'Il povero', 'Fantascienza', 1889, '8765765645'),
(2667, 1, 'La vacanza andata male', 'Comico', 2013, '675764378');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `amministratore`
--
ALTER TABLE `amministratore`
  ADD PRIMARY KEY (`id_amministratore`);

--
-- Indici per le tabelle `autore`
--
ALTER TABLE `autore`
  ADD PRIMARY KEY (`id_autore`);

--
-- Indici per le tabelle `catalogo_libri`
--
ALTER TABLE `catalogo_libri`
  ADD PRIMARY KEY (`id_catalogo_libri`),
  ADD KEY `id_autore` (`id_autore`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `amministratore`
--
ALTER TABLE `amministratore`
  MODIFY `id_amministratore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `autore`
--
ALTER TABLE `autore`
  MODIFY `id_autore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `catalogo_libri`
--
ALTER TABLE `catalogo_libri`
  MODIFY `id_catalogo_libri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2668;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `catalogo_libri`
--
ALTER TABLE `catalogo_libri`
  ADD CONSTRAINT `catalogo_libri_ibfk_1` FOREIGN KEY (`id_autore`) REFERENCES `autore` (`id_autore`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
