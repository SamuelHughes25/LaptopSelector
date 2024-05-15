<?php
$new_email = $_POST['new_email'];
$new_username = $_POST['new_username'];
$new_password = $_POST['new_password'];

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
$stmt = $conn->prepare("INSERT INTO $table_name (email, user_name, password) VALUES (?, ?, ?)");
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

if (!$stmt->bind_param("sss", $new_email, $new_username, $new_password)) {
    die("Binding parameters failed: " . $stmt->error);
}
if (!$stmt->execute()) {
    die("Execute failed: " . $stmt->error);
}
echo "Account created successfully";

$stmt->close();
$conn->close();

header("Location: Laptops.php");
exit();
?>