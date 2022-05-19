<?php

require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/Review.php';



$pdo = (new PDOFactory())->getPdo();

$query = $pdo->query('SELECT review.id, review.user_id, review.movie_id, review.comment, review.date, users.username, users.id FROM `review`, `users` WHERE review.user_id = users.id ORDER BY `date`');

$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];

//chercher l'user id
foreach ($query->fetchAll() as $post) {
//    var_dump($post);
    $res[] = [
        'id' => $post['id'],
        'username' => $post['username'],
        'movie_id' => $post['movie_id'],
        'comment' => $post['comment'],
        'date' => $post['date']
    ];
}

echo json_encode($res);

?>
