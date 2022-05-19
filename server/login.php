<?php


require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/User.php';

$email = $_SERVER['PHP_AUTH_USER'] ?? '';
$password = $_SERVER['PHP_AUTH_PW'] ?? '';

if (!$email || !$password) {
    echo json_encode([
        'status' => 'error',
        'message' => 'email or password parameters missing'
    ]);
    exit;
}
$pdo = (new PDOFactory())->getPdo();
$query = $pdo->prepare('SELECT * FROM `users` WHERE `email` = :email');
$query->bindValue('email', $email, PDO::PARAM_STR);
$query->setFetchMode(PDO::FETCH_CLASS, User::class);
if ($query->execute()) {
    /** @var User $user */
    $user = $query->fetch();
    if ($user && password_verify($password, $user->getPassword())) {



        echo json_encode([
            'status' => 'success',
            'email' => $user->getEmail(),
            'token' => $user->getToken()
        ]);
        exit;
    }
    echo json_encode([
        'status' => 'error',
        'message' => 'Wrong credentials'
    ]);
}

exit;
