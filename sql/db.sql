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
  `token` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `token`, `username`) VALUES
(1, 'admin@gmail.com', '$2y$10$X9zyXKFGfBm4atKnboq3dO5InRmRLgxnYvzXkxD4Uw3RjBHPOGCoi', '9HrAiHTTjIELY65qfWNlMNXFBwDJsUUJxwSD6Jh5qVJlNb7xys', 'admin'),
(2, 'mama@gmail.com', '$2y$10$X9zyXKFGfBm4atKnboq3dO5InRmRLgxnYvzXkxD4Uw3RjBHPOGCoi', 'XPHmnXllnXIq4Q4FLFUg3MwuhhcL8WWdxYOrCmKQlZp4opeZyJ', 'mama');

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
  `affiche` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `stars` int(1) NOT NULL DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movies`
--

INSERT INTO `movies` (`id`, `name`, `creator`, `published`, `affiche`, `description`, `stars`) VALUES
(1, "E.T", 'Steven Spielberg', '1982-12-01 09:10:02', 'ET.jpeg', "Une soucoupe volante atterrit en pleine nuit près de Los Angeles. Quelques extraterrestres, envoyés sur Terre en mission d'exploration botanique, sortent de l'engin, mais un des leurs s'aventure au-delà de la clairière où se trouve la navette. Celui-ci se dirige alors vers la ville. C'est sa première découverte de la civilisation humaine. Bientôt traquée par des militaires et abandonnée par les siens, cette petite créaturevapeurée se nommant E.T. se réfugie dans une résidence de banlieue. Elliot, un garçon de dix ans, le découvre et lui construit un abri dans son armoire. Rapprochés par un échange télépathique, les deux êtres ne tardent pas à devenir amis. Aidé par sa soeur Gertie et son frère aîné Michael, Elliot va alors tenter de garder la présence d'E.T. secrète.", 4),
(2, "Avatar", 'James Cameron', '2009-03-04 13:10:02', 'avatar.jpeg', "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des 'pilotes' humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.
Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake...", 5),
(3, "Les Tuches", 'Olivier Baroux', '2011-07-01 19:10:02', 'tuches.jpeg', "A Bouzolles, tout le monde connaît la famille Tuche. Jeff, Cathy et leurs trois enfants vivent du système D. Respectueuse de la philosophie Tuche, « l’homme n’est pas fait pour travailler », toute la famille s’emploie à être heureuse malgré le cruel manque de revenus.
Leurs vies étaient toutes tracées. Ils seraient toujours pauvres, mais heureux. Mais un bouleversement va mettre en péril ce fragile équilibre. Les Tuche vont devenir riches, très riches. 100 millions d’euros gagnés à « L’Euroloterie » vont tout changer. Quitte à changer de vie, autant changer de lieu. Quoi de plus logique pour les Tuche que d’aller vivre à Monaco, là où Cathy a toujours rêvé d’habiter. Ils devront se faire accepter, s’intégrer dans leur nouvelle patrie, changer leurs habitudes sans changer leurs sentiments. La partie n’est pas gagnée pour cette famille qui a comme adage « Tuche pour un, Un pour Tuche ».", 4),
(4, "TWILIGHT - CHAPITRE 1 : FASCINATION", 'Catherine Hardwicke', '2009-01-07 16:10:02', 'twilight.jpeg', "Isabella Swan, 17 ans, déménage à Forks, petite ville pluvieuse dans l'Etat de Washington, pour vivre avec son père. Elle s'attend à ce que sa nouvelle vie soit aussi ennuyeuse que la ville elle-même. Or, au lycée, elle est terriblement intriguée par le comportement d'une étrange fratrie, deux filles et trois garçons. Bella tombe follement amoureuse de l'un d'eux, Edward Cullen. Une relation sensuelle et dangereuse commence alors entre les deux jeunes gens : lorsque Isabella comprend que Edward est un vampire, il est déjà trop tard.", 2),
(5, "SKYFALL", 'Sam Mendes', '2012-10-26 08:08:36', 'skyfall.jpeg', "Lorsque la dernière mission de Bond tourne mal, plusieurs agents infiltrés se retrouvent exposés dans le monde entier. Le MI6 est attaqué, et M est obligée de relocaliser l’Agence. Ces événements ébranlent son autorité, et elle est remise en cause par Mallory, le nouveau président de l’ISC, le comité chargé du renseignement et de la sécurité. Le MI6 est à présent sous le coup d’une double menace, intérieure et extérieure. Il ne reste à M qu’un seul allié de confiance vers qui se tourner : Bond. Plus que jamais, 007 va devoir agir dans l’ombre. Avec l’aide d’Eve, un agent de terrain, il se lance sur la piste du mystérieux Silva, dont il doit identifier coûte que coûte l’objectif secret et mortel…", 4),
(6, "ALITA : BATTLE ANGEL", 'Robert Rodriguez', '2019-02-13 08:09:50', 'alita.jpeg', "Lorsqu’Alita se réveille sans aucun souvenir de qui elle est, dans un futur qu’elle ne reconnaît pas, elle est accueillie par Ido, un médecin qui comprend que derrière ce corps de cyborg abandonné, se cache une jeune femme au passé extraordinaire. Ce n’est que lorsque les forces dangereuses et corrompues qui gèrent la ville d’Iron City se lancent à sa poursuite qu’Alita découvre la clé de son passé - elle a des capacités de combat uniques, que ceux qui détiennent le pouvoir veulent absolument maîtriser. Si elle réussit à leur échapper, elle pourrait sauver ses amis, sa famille, et le monde qu’elle a appris à aimer.", 4);



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
  ADD KEY `token` (`token`),
  ADD KEY `username` (`username`);


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
