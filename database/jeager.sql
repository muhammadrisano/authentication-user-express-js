-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 09 Okt 2019 pada 11.53
-- Versi Server: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.3.9-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jeager`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`id`, `role_name`) VALUES
(1, 'admin'),
(2, 'operator'),
(3, 'user'),
(4, 'kepala_gudang1'),
(6, 'karywanan biasa2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `fullname` varchar(64) NOT NULL,
  `salt` varchar(128) NOT NULL,
  `token` varchar(256) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `email`, `password`, `fullname`, `salt`, `token`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'admin@gmail.com', '63ef4fd7e2d6c1351bb162c8e4d4da020cde33d2aca298d2cc35ff8b4d5aad6ccb2ec355b98d02c9f66f605cf296f7adeba66ad8e3da71d7a7197966e5cc5bb1', 'admin', 'abb39e22b0158561e6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImlhdCI6MTU3MDU5NDQ3OSwiZXhwIjoxNTcwNTk4MDc5fQ.PNM05QmWXHPQHpduCXZbW-lpWPtkcOFGUtD_hcRGMbI e41bfd182bfbf6f8fb71ce9f994ed0943f2167c4', 1, '2019-10-08 05:42:45', '2019-10-08 07:13:06'),
(2, 'risano@gmail.com', '173f4379c60bfffc55a9c12ea45223c41cdad298a75dc6ed8af79f1f840b81d5d45f1362b6d56577cab4e8ba662e8c962e9f42711e324e17a17f12d3d726b1b2', 'risano', '7b82a27e06c5b7e7e9', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIsImlhdCI6MTU3MDU5NTQ2NywiZXhwIjoxNTcwNTk5MDY3fQ.WbKYVh60ZWKKrYdfZQkuqbEtWj2gQK5BGj3JA8Pa0J8', 3, '2019-10-08 09:18:57', '2019-10-08 09:18:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
