<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

// MySQL Database connection details
$servername = "localhost";
$port = 3306;
$db_username = "sh1690_Admin";
$db_password = "ServerAdmin";
$db_name = "sh1690_db1";
$table_name = "siteUsers";

// Creating connection
$conn = new mysqli($servername, $db_username, $db_password, $db_name, $port);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Preparing SQL statement to prevent SQL injection
$stmt = $conn->prepare("SELECT * FROM $table_name WHERE user_name=? AND password=?");
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

if (!$stmt->bind_param("ss", $username, $password)) {
    die("Binding parameters failed: " . $stmt->error);
}
if (!$stmt->execute()) {
    die("Execute failed: " . $stmt->error);
}
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $email = $row['email'];

    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;

    header("Location: Laptops.php");
    exit();
} else {
    echo "Invalid username or password";
}
