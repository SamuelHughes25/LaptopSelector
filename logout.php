<?php
// Starting the session
session_start();
$_SESSION = array();
// Terminating the session
session_destroy();

echo '<script>window.location.href = "Home.php";</script>';
exit();
?>