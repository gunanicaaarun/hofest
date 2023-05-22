<?php
sleep(1);
$data = "<h4>Guna portion of the page is reloaded dynamically</h4><p>content is being fetched from a php file hosted to the url: <a href='http://localhost:1234/data.php'>http://localhost:1234/data.php</a></p>";
header('Content-Type: text/plain');
header("Access-Control-Allow-Origin:*");
echo $data;

// To this file, excute the following commands
// touch data.php
// php -S localhost:1234