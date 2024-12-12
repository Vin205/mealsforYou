<?php
// Database configuration
$servername = "localhost"; // Change this to your MySQL server's address
$username = "username"; // Change this to your MySQL username
$password = "password"; // Change this to your MySQL password
$database = "dbname"; // Change this to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming you have a table named 'poll_responses' with columns 'question1', 'question2', 'question3'
// Insert data into the table
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $question1 = $_POST['question1'];
    $question2 = $_POST['question2'];
    $question3 = $_POST['question3'];
    
    $sql = "INSERT INTO poll_responses (question1, question2, question3) VALUES ('$question1', '$question2', '$question3')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false, "error" => $conn->error));
    }
}

// Close connection
$conn->close();
?>
