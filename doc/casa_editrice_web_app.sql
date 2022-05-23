-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 23, 2022 alle 17:32
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
(0, 'Hannah', 'Velazquez', '1803-04-29', 'Moldova'),
(1, 'Michael', 'Deleon', '1867-08-02', 'Tunisia'),
(2, 'Connor', 'Smith', '1835-06-14', 'Denmark'),
(3, 'Tyler', 'Joyce', '1834-07-11', 'Falkland Islands (Malvinas)'),
(4, 'Jeffrey', 'Simpson', '1819-08-23', 'Yemen'),
(5, 'Stephanie', 'House', '1836-06-04', 'Bermuda'),
(6, 'Chris', 'Berry', '1863-04-18', 'Czech Republic'),
(7, 'Joanne', 'Stuart', '1836-08-06', 'Tokelau'),
(8, 'Katherine', 'Hall', '1838-03-22', 'Vietnam'),
(9, 'Holly', 'Guzman', '1796-06-10', 'Rwanda');

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
(2668, 0, 'Serious inside else memory if six.', 'Giallo', 1962, '1-59382-421-1'),
(2669, 0, 'Son would mouth relate own chair better available.', 'Umoristico', 1932, '1-81565-938-6'),
(2670, 0, 'Kind miss artist truth trouble behavior style.', 'Romanzo storico', 1808, '1-5351-3933-1'),
(2671, 0, 'Sort language ball floor.', 'Giallo', 1888, '0-484-18583-7'),
(2672, 0, 'Natural explain before something first drug contain start.', 'Triller', 1860, '1-71122-018-3'),
(2673, 0, 'Study modern miss dog Democrat quickly.', 'Umoristico', 1999, '1-77515-917-5'),
(2674, 0, 'Picture suddenly drug rule bring determine some forward.', 'Erotico', 1901, '0-230-98910-1'),
(2675, 0, 'Play paper office hospital.', 'Distopia', 1979, '0-09-032173-1'),
(2676, 0, 'View age international big.', 'Biografia', 1950, '0-314-56208-7'),
(2677, 0, 'Always beyond write current grow rule stuff.', 'Umoristico', 1913, '0-02-258419-6'),
(2678, 1, 'Program actually race tonight themselves true.', 'Autobiografia', 1882, '1-4280-7150-4'),
(2679, 1, 'Exactly drive well good explain grow water.', 'Fantascienza', 1935, '1-66109-352-3'),
(2680, 1, 'Development large report purpose themselves.', 'Azione', 1875, '1-960271-42-3'),
(2681, 1, 'Month maintain no sense this manager fine.', 'Azione', 1826, '0-638-12066-7'),
(2682, 1, 'About add senior woman put partner.', 'Giallo', 1943, '0-934421-76-5'),
(2683, 1, 'Ball ever laugh society technology card minute practice.', 'Young Adult', 1984, '0-240-00348-9'),
(2684, 1, 'Water voice travel among see red.', 'Umoristico', 1951, '1-65823-694-7'),
(2685, 1, 'Catch even front.', 'Giallo', 1945, '0-590-04229-7'),
(2686, 1, 'Guess writer can boy room.', 'Romanzo storico', 1945, '1-281-46546-1'),
(2687, 1, 'Between training listen subject.', 'Fantascienza', 1839, '0-7176-0452-7'),
(2688, 2, 'Phone heart window police.', 'Umoristico', 1856, '0-330-60168-7'),
(2689, 2, 'Face turn small research describe base detail.', 'Horror', 1921, '0-635-11087-3'),
(2690, 2, 'Budget huge debate among way.', 'Fantascienza', 1904, '0-13-765821-4'),
(2691, 2, 'Work chance image quite there many true follow.', 'Umoristico', 2004, '1-389-30555-4'),
(2692, 2, 'Modern themselves owner.', 'Erotico', 2005, '1-947118-01-3'),
(2693, 2, 'Candidate feel serve large technology.', 'Umoristico', 1859, '1-58688-091-8'),
(2694, 2, 'Serious wrong section town deal movement out.', 'Giallo', 1970, '1-993002-48-0'),
(2695, 2, 'Effort assume teacher wall field impact special.', 'Biografia', 1849, '0-234-50076-X'),
(2696, 2, 'Man tell response purpose.', 'Horror', 1892, '1-60976-701-2'),
(2697, 2, 'Sing after our car food record power.', 'Triller', 1933, '1-71097-951-8'),
(2698, 3, 'Fast support when hold family second whatever work.', 'Azione', 1919, '0-06-753751-0'),
(2699, 3, 'Top always effort.', 'Young Adult', 1860, '0-318-86841-5'),
(2700, 3, 'International not type very.', 'Erotico', 1848, '0-16-207660-6'),
(2701, 3, 'Try while reveal bad audience grow ahead.', 'Horror', 1826, '0-03-519230-5'),
(2702, 3, 'Probably rule too security fall.', 'Biografia', 1966, '0-227-17542-5'),
(2703, 3, 'Whom gun list.', 'Giallo', 1988, '1-85291-189-1'),
(2704, 3, 'Choose today watch source firm.', 'Romanzo storico', 1836, '0-245-60290-9'),
(2705, 3, 'Back available inside nearly scientist central.', 'Biografia', 1878, '1-5137-5806-3'),
(2706, 3, 'Across while top kid he weight.', 'Fantasy', 1815, '0-14-189276-5'),
(2707, 3, 'Should it easy law.', 'Young Adult', 1878, '1-71734-079-2'),
(2708, 4, 'Account fear shoulder pick nation choose relationship.', 'Horror', 1906, '0-7386-4014-X'),
(2709, 4, 'A huge three.', 'Triller', 2014, '1-145-43910-1'),
(2710, 4, 'Society figure future morning.', 'Biografia', 1946, '0-16-448298-9'),
(2711, 4, 'Decision black western myself scientist tough everything kind.', 'Avventura', 1954, '0-11-669728-8'),
(2712, 4, 'Government line indeed live reason.', 'Autobiografia', 1909, '1-07-427093-2'),
(2713, 4, 'Green hospital year.', 'Young Adult', 2011, '0-605-01904-5'),
(2714, 4, 'Road dinner seem explain black.', 'Biografia', 1835, '1-62566-272-6'),
(2715, 4, 'Firm decade cost glass work interview man.', 'Umoristico', 1992, '0-7390-6031-7'),
(2716, 4, 'Hair sea quality do.', 'Giallo', 1914, '0-8456-7088-3'),
(2717, 4, 'Ok majority region democratic entire analysis.', 'Biografia', 1925, '1-04-021639-0'),
(2718, 5, 'Newspaper determine cover part paper beat.', 'Fantasy', 1866, '1-875408-03-7'),
(2719, 5, 'Bag thank generation study economy rock.', 'Horror', 1958, '1-86475-304-8'),
(2720, 5, 'Authority leave right answer speak without leave.', 'Young Adult', 2006, '0-13-126379-X'),
(2721, 5, 'Stand next though house.', 'Romanzo storico', 1932, '0-7324-5561-8'),
(2722, 5, 'Tonight particular smile represent since method left.', 'Distopia', 1857, '1-301-91263-8'),
(2723, 5, 'Expect save process score middle.', 'Fantasy', 1968, '0-641-95384-4'),
(2724, 5, 'Science top ask film force.', 'Fantasy', 1974, '1-4922-0885-X'),
(2725, 5, 'One agent candidate how wish member.', 'Horror', 1884, '0-379-33236-1'),
(2726, 5, 'Part car material truth pattern ago.', 'Giallo', 1994, '1-74038-277-3'),
(2727, 5, 'Finish summer else page region start size.', 'Romanzo storico', 1804, '0-305-35734-4'),
(2728, 6, 'Public figure ground much run character.', 'Young Adult', 1866, '1-00-300351-6'),
(2729, 6, 'General professional career two.', 'Erotico', 1954, '1-254-25660-1'),
(2730, 6, 'Through move source wonder relate service.', 'Rosa', 1909, '1-62082-982-7'),
(2731, 6, 'Form style star east.', 'Avventura', 1947, '0-8216-9197-X'),
(2732, 6, 'Past always future scene.', 'Horror', 1805, '0-07-154273-6'),
(2733, 6, 'Green save identify establish manage hotel financial.', 'Umoristico', 2013, '1-08-984076-4'),
(2734, 6, 'Identify many again science.', 'Horror', 2018, '1-943885-64-8'),
(2735, 6, 'Break word source wall drug.', 'Autobiografia', 1800, '0-250-90925-1'),
(2736, 6, 'Fact fall manager idea issue color.', 'Umoristico', 1803, '0-7250-7493-0'),
(2737, 6, 'Nature interest wear community.', 'Autobiografia', 1848, '0-291-88966-2'),
(2738, 7, 'Find add sing standard exactly.', 'Horror', 1854, '1-5362-0829-9'),
(2739, 7, 'Guess we no in pass sound.', 'Umoristico', 1802, '0-582-35703-9'),
(2740, 7, 'Through ever war unit back large season.', 'Autobiografia', 1962, '0-327-16644-4'),
(2741, 7, 'Think similar particular before air action.', 'Young Adult', 1883, '0-666-60975-6'),
(2742, 7, 'Camera report foreign agency list miss among.', 'Umoristico', 1825, '1-01-318705-9'),
(2743, 7, 'Fire town worker.', 'Rosa', 1950, '1-292-64802-3'),
(2744, 7, 'Throughout treat relate respond.', 'Biografia', 1896, '0-86259-118-X'),
(2745, 7, 'Spend cut end red.', 'Rosa', 1919, '1-872782-09-4'),
(2746, 7, 'Political almost serious stand.', 'Azione', 1823, '0-7937-8252-X'),
(2747, 7, 'Sign arm bar military able simple billion.', 'Autobiografia', 1915, '1-56851-250-3'),
(2748, 8, 'Safe affect though cover.', 'Umoristico', 1853, '0-460-92516-4'),
(2749, 8, 'Key page per.', 'Biografia', 2004, '1-9762-0743-6'),
(2750, 8, 'Ask benefit ago again identify real.', 'Distopia', 1873, '1-78771-086-6'),
(2751, 8, 'Agree middle student bag grow.', 'Erotico', 1821, '1-02-840065-9'),
(2752, 8, 'War receive civil single.', 'Avventura', 1807, '0-9507603-3-1'),
(2753, 8, 'Forget whom goal clear inside.', 'Rosa', 1976, '0-690-29062-4'),
(2754, 8, 'Affect station member although.', 'Young Adult', 1921, '0-260-66953-9'),
(2755, 8, 'Hair describe hundred candidate.', 'Young Adult', 1906, '0-663-76363-0'),
(2756, 8, 'However ok structure your those head against.', 'Horror', 1856, '0-409-56180-0'),
(2757, 8, 'Require agree inside thank.', 'Romanzo storico', 1854, '1-179-72257-4'),
(2758, 9, 'City truth ten seven both happy.', 'Fantasy', 1815, '1-78034-295-0'),
(2759, 9, 'Herself among necessary alone improve.', 'Triller', 1805, '0-522-19520-2'),
(2760, 9, 'Office less politics religious back international.', 'Erotico', 1942, '0-232-30827-6'),
(2761, 9, 'Tonight perhaps explain soldier range sort.', 'Distopia', 1935, '1-258-58268-6'),
(2762, 9, 'Doctor trip her hope likely.', 'Horror', 1849, '1-61220-998-X'),
(2763, 9, 'Recent positive daughter popular.', 'Autobiografia', 1819, '1-926100-15-8'),
(2764, 9, 'Five put hard recent project speech director.', 'Distopia', 2009, '0-8202-8693-1'),
(2765, 9, 'Remain if again care hold those.', 'Young Adult', 1987, '1-196-53870-0'),
(2766, 9, 'Per environmental medical nearly hour enter discover.', 'Rosa', 1933, '0-492-71176-3'),
(2767, 9, 'Well news enter director book cell speech.', 'Fantascienza', 2003, '0-298-30068-0');

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
  MODIFY `id_autore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT per la tabella `catalogo_libri`
--
ALTER TABLE `catalogo_libri`
  MODIFY `id_catalogo_libri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12669;

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
