<?php
$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$movie_id = substr(strrchr($url, '/'), 1);
setcookie('hetic_token', "8daf9e44517aa27246553ff109c053c0744e25cd33d7e051c92f7be36b93909361b3490cc5734f20fbc4f1039807cb4b5ece", time() + 1000, '/');
setcookie('hetic_email', "admin@gmail.com", time() + 1000, '/');
echo $url;
echo gettype(intval($movie_id));
 ?>
