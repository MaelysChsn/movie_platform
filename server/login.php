<?php


require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/User.php';
require_once 'Classes/CookieHelper.php';

setcookie('hetic_token', "8daf9e44517aa27246553ff109c053c0744e25cd33d7e051c92f7be36b93909361b3490cc5734f20fbc4f1039807cb4b5ece", time() + 1000, '/');
setcookie('hetic_email', "admin@gmail.com", time() + 1000, '/');


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
