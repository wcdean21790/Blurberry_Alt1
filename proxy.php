<?php
if (isset($_GET['url'])) {
    $url = urldecode($_GET['url']);

    // Set headers to allow cross-origin requests
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    // Fetch the data from the remote server
    $data = file_get_contents($url);

    // Serve the data to the client
    echo $data;
} else {
    echo 'Invalid URL';
}
?>
