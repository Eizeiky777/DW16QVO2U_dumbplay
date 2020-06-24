-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Jun 2020 pada 07.50
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbsound`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `artists`
--

INSERT INTO `artists` (`id`, `name`, `old`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Henry', 29, 'Rnb', 2002, '2020-06-15 10:25:50', '2020-06-16 10:25:53'),
(2, 'Yiruma', 39, 'Rnb', 2012, '2020-06-23 03:54:39', '2020-06-23 03:54:39'),
(3, 'Aimer', 30, 'Pop', 2003, '2020-06-23 04:07:35', '2020-06-23 04:07:35'),
(4, 'Godzilla', 29, 'RnB Pop', 2009, '2020-06-23 04:08:17', '2020-06-23 04:08:17'),
(5, '88 Risings', 33, 'Rock Pop', 2010, '2020-06-23 04:09:28', '2020-06-23 04:09:28'),
(6, 'Rich Brian', 23, 'Hip Hop', 2008, '2020-06-23 08:15:23', '2020-06-23 08:15:23'),
(7, 'Michael Jackson', 39, 'Pop', 1990, '2020-06-23 08:19:52', '2020-06-23 08:19:52'),
(8, 'lilya', 12, 'Pop', 2010, '2020-06-23 11:43:41', '2020-06-23 11:43:41'),
(9, 'Jason Mraz', 35, 'Pop', 2008, '2020-06-23 14:32:53', '2020-06-23 14:32:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `artistId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `music`
--

INSERT INTO `music` (`id`, `title`, `year`, `thumbnail`, `attach`, `artistId`, `createdAt`, `updatedAt`) VALUES
(1, 'secondary ', 2002, '801a094e51bcc637b995e1ae9f3abaf1.png', 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', 1, '2020-06-23 03:38:34', '2020-06-23 03:38:34'),
(19, 'Kiss the rain', 2002, '0151214961d6b4c4c87c542e1314ce8a.png', 'https://soundcloud.com/keypoly/kiss-the-rain-sungha-jung', 1, '2020-06-23 16:32:08', '2020-06-23 16:32:08'),
(20, 'Kiss the rain', 2002, 'f299442da3ee245453569d2cfdea23d3.png', 'https://soundcloud.com/keypoly/kiss-the-rain-sungha-jung', 1, '2020-06-23 16:37:02', '2020-06-23 16:37:02'),
(21, 'Kiss the rain', 2002, 'af00005d4e019db426d901c9713f3944.png', 'https://soundcloud.com/keypoly/kiss-the-rain-sungha-jung', 1, '2020-06-23 16:47:37', '2020-06-23 16:47:37'),
(22, 'Kiss the rain', 2002, 'ae27bc50766ff94cea3000cf8b8a603d.png', 'https://soundcloud.com/keypoly/kiss-the-rain-sungha-jung', 1, '2020-06-23 17:03:22', '2020-06-23 17:03:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200611113937-create-user.js'),
('20200612061524-create-artist.js'),
('20200612061537-create-music.js'),
('20200613022740-create-transaction.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `status` enum('pending','cancel','approved') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `startDate`, `dueDate`, `userId`, `attach`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '2020-06-12', '2020-07-12', 1, '8844b2ef54fcaed196e4f716249b61c7.jpg', 'pending', '2020-06-23 04:01:28', '2020-06-23 04:01:28'),
(2, '2020-06-12', '2020-07-12', 2, 'f3791b1cb7bc0933e068759f6ef00a72.jpg', 'pending', '2020-06-23 04:03:00', '2020-06-23 04:03:00'),
(3, '2020-06-23', '2020-07-23', 2, '56d2594425e48720ef9db99f50e50341.jpg', 'pending', '2020-06-23 12:53:57', '2020-06-23 12:53:57'),
(4, '2020-06-23', '2020-07-23', 1, 'ab09b5b99435db7647f07ac580874bca.jpg', 'pending', '2020-06-23 14:31:06', '2020-06-23 14:31:06'),
(5, '2020-06-23', '2020-07-23', 2, '3d1f8cfa4f13ffa0b69c587a931656b3.jpg', 'pending', '2020-06-23 16:39:29', '2020-06-23 16:39:29'),
(6, '2020-06-23', '2020-07-23', 2, 'e98344c39861bd05a6eeeb1b96c4f69c.jpg', 'pending', '2020-06-23 16:45:23', '2020-06-23 16:45:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `listAs` enum('user','admin') DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `listAs`, `gender`, `phone`, `address`, `subscribe`, `createdAt`, `updatedAt`) VALUES
(1, 'Ban', 'ban@gmail.com', '$2b$10$JYIUdHjCa6uyaU7CefqSr.ve63fcVukZzWI.mzHJoTgNcAgG3bmr6', 'user', 'male', 2147483647, 'konoha street no 1', 0, '2020-06-23 02:03:37', '2020-06-23 02:03:37'),
(2, 'Meliodas', 'meliodas@gmail.com', '$2b$10$ZPnFNzL3PBEDSGM3WvKbL.2R4u2TUOFKY7rm4GN82VAkRTTMYcfp6', 'user', 'male', 628111111, 'konoha street no 2', 0, '2020-06-23 02:04:30', '2020-06-23 02:04:30'),
(3, 'Merlin', 'merlin@gmail.com', '$2b$10$CZzvvcgnMOvMZEbeNydM6uUpPPr2OOXS/K2U7HIkaF35FvxAPvkdG', 'user', 'female', 628000000, 'konoha street no 3', 0, '2020-06-23 02:05:29', '2020-06-23 02:05:29'),
(4, 'Escanor', 'escanor@gmail.com', '$2b$10$1kCIEpkzoD2SKCsI.bc6IOoPoIORGbBrt/sGRIc7.z6WPmL.rJNcC', 'user', 'male', 2147483647, 'konoha street no 4', 0, '2020-06-23 02:06:01', '2020-06-23 02:06:01'),
(5, 'King', 'king@gmail.com', '$2b$10$wmpPSO.3cnfscK2qN9jVe.wuImEF.eKSa1mr0HV01A0h.zMl9CMNW', 'user', 'male', 2147483647, 'konoha street no 5', 0, '2020-06-23 02:06:28', '2020-06-23 02:06:28'),
(6, 'admin', 'ban3@gmail.com', '$2b$10$oamf15K5xjKNpuueZJT56eSG260eBhdcu02nbvVwlUzOtolRcm/0a', 'admin', 'male', 2147483647, 'konoha street no 5', 1, '2020-06-23 02:08:34', '2020-06-23 02:08:34'),
(7, 'erro23', 'erro23@gmail.com', '$2b$10$P5AcUpKH78MhpGSYmo1Bs.MN0TjfoFflmV3XBmadbLIg7Cde1wO.i', 'user', 'female', 12313213, 'jl sulawesi no 123', 0, '2020-06-23 07:11:56', '2020-06-23 07:11:56'),
(8, 'erro23', 'Tigreal@yahoo.co.id', '$2b$10$ml7jJBTLpb7RsFj1jyVVN.UqVArJepY5s6yuRWkHm4wSuQ5hkcXFC', 'user', 'female', 12313213, 'jl sulawesi no 123', 0, '2020-06-23 07:19:00', '2020-06-23 07:19:00'),
(9, 'retyui', 'eeee@gmail.com', '$2b$10$2rV3MKpHCrh2LgQjyQYGn.pMsYM7tddgh4mhwg5v5nMVhfua3XkDu', 'user', 'female', 12313213, 'jl sulawesi no 123', 0, '2020-06-23 14:29:35', '2020-06-23 14:29:35');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `music_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
