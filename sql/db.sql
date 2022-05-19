-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : ven. 8 avr. 2021 à 10:14
-- Version du serveur : 10.6.5-MariaDB-1:10.6.5+maria~focal
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db`
--

CREATE DATABASE IF NOT EXISTS db;
USE db;
-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `token`) VALUES
(1, 'admin@gmail.com', 'password', '9HrAiHTTjIELY65qfWNlMNXFBwDJsUUJxwSD6Jh5qVJlNb7xys'),
(2, 'mama@gmail.com', 'mama', 'XPHmnXllnXIq4Q4FLFUg3MwuhhcL8WWdxYOrCmKQlZp4opeZyJ');

-- --------------------------------------------------------

--
-- Structure de la table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `comment` varchar(10000) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `review`
--

INSERT INTO `review` (`id`, `user_id`, `movie_id`, `comment`) VALUES
(1, 1, 1, 'Ce film est vraiment cool !!'),
(2, 2, 3, 'WAAAA j\'ai vraiment trop aimer ce film  !!'),
(3, 1, 2, 'Vraiment on aurais pu trouver mieux comme réalisateur'),
(4, 2, 1, 'Franchement pas si mal');


-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `published` datetime NOT NULL,
  `affiche` varchar(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movies`
--

INSERT INTO `movies` (`id`, `name`, `creator`, `published`, `affiche`) VALUES
(1, "E.T", 'Jean Carin', '2013-02-08 09:10:02', 'ET.jpeg'),
(2, "Avatar", 'James Cameron', '2009-03-04 13:10:02', 'avatar.jpeg'),
(3, "Les Tuches", 'Jérome Richard', '2012-04-28 19:10:02', 'tuches.jpeg'),
(4, "Twilight", 'Marine Buttler', '2006-07-15 16:10:02', 'twilight.jpeg');



-- --------------------------------------------------------

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `posts`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `comment` (`comment`),
  ADD KEY `date` (`date`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`),
  ADD KEY `password` (`password`),
  ADD KEY `token` (`token`);


  --
  -- Index pour la table `movies`
  --
  ALTER TABLE `movies`
    ADD PRIMARY KEY (`id`),
    ADD KEY `name` (`name`),
    ADD KEY `creator` (`creator`),
    ADD KEY `published` (`published`),
    ADD KEY `affiche` (`affiche`);


--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

--
-- AUTO_INCREMENT pour la table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
