<?php

require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/Movie.php';

$pdo = (new PDOFactory())->getPdo();

$query = $pdo->query('SELECT * FROM movies ORDER BY `name` DESC');
$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];


foreach ($query->fetchAll() as $post) {
//    var_dump($post);
    $res[] = [
        'id' => $post['id'],
        'name' => $post['name'],
        'creator' => $post['creator'],
        'published' => $post['published'],
        'affiche' => $post['affiche'],
        'description' => $post['description'],
        'stars' => $post['stars']
    ];
}

echo json_encode($res);

?>
