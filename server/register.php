<?php

require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/TokenHelper.php';
require_once 'Classes/User.php';
require_once 'Classes/CookieHelper.php';

$email = $_REQUEST['email'] ?? '';
$password = $_REQUEST['password'] ?? '';

if (!$email || !$password) {
    echo json_encode([
        'status' => 'error',
        'message' => 'email or password parameters missing'
    ]);
    exit;
}


$pdo = (new PDOFactory())->getPdo();
$query = $pdo->prepare('SELECT COUNT(*) FROM `users` WHERE `email` = :email');
$query->bindValue('email', $email, PDO::PARAM_STR);
$query->execute();

$userAlreadyExists = (bool)$query->fetchAll(PDO::FETCH_ASSOC)[0]["COUNT(*)"];

if ($userAlreadyExists) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Email already exists'
    ]);
    exit;
}

$insert = $pdo->prepare('INSERT INTO users (`email`, `password`, token) VALUES (:email, :password, :token)');
$insert->bindValue('email', $email, PDO::PARAM_STR);
$insert->bindValue('password', password_hash($password, PASSWORD_BCRYPT), PDO::PARAM_STR);
$insert->bindValue('token', TokenHelper::buildToken(), PDO::PARAM_STR);

if ($insert->execute()) {
    $lastInsertId = $pdo->lastInsertId();
    $return = $pdo->query("SELECT * FROM users WHERE id = {$lastInsertId}");
    $return->setFetchMode(PDO::FETCH_CLASS, User::class);
    /** @var User $newUser */
    $newUser = $return->fetch();

    CookieHelper::setCookie($newUser->getToken(), $newUser->getEmail());

    echo json_encode([
        'status' => 'success',
        'email' => $newUser->getEmail(),
        'token' => $newUser->getToken()
    ]);
    exit;
}
