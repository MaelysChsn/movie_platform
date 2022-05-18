<?php

require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/User.php';
require_once 'Classes/Review.php';

$token = str_replace('Bearer ', '', getallheaders()['Authorization'] ?? '') ?? '';

$reviewComment = $_POST['comment'] ?? '';
$movie_id = $_POST['movie_id'] ?? '';

if (!$token) {
    echo json_encode([
        'status' => 'error',
        'message' => 'You need a bearer token to post here'
    ]);
    exit;
}

if (!$reviewComment ) {
    echo json_encode([
        'status' => 'error',
        'message' => 'votre post dois avoir un content'
    ]);
    exit;
}

$pdo = (new PDOFactory())->getPdo();
$query = $pdo->prepare('SELECT * FROM `users` WHERE `token` = :token');
$query->bindValue('token', $token, PDO::PARAM_STR);
$query->setFetchMode(PDO::FETCH_CLASS, User::class);
if ($query->execute()) {
    /** @var User $user */
    $user = $query->fetch();
    if (!$user) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid Token'
        ]);
        exit;
    }

    $review = (new Review())
        ->setUserId($user->getId())
        ->setMovieId($movie_id)
        ->setComment($reviewComment);

    $update = $pdo->prepare('INSERT INTO `review`(`user_id`, `movie_id`, `comment`) VALUE (:user_id, :movie_id, :comment)');
    $update->bindValue('user_id', $user->getId(), PDO::PARAM_STR);
    $update->bindValue('movie_id',$review->getMovieId(), PDO::PARAM_STR);
    $update->bindValue('comment', $review->getComment(), PDO::PARAM_STR);

    if ($update->execute()) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Review saved',
            'cookie' => $_COOKIE['hetic_token'] ?? 'expired cookie'
        ]);
    }
}

exit;
