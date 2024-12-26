<?php

require_once 'env.php';

loadEnv();


$currentEnv = getenv('ENVIRONMENT');
if ($currentEnv === 'dev') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods');
    header('Access-Control-Allow-Headers: Content-Type');
}
header('Content-Type: application/json');


$servername = getenv('DB_HOST');
$username = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}

$response = [];

try {
    $database = getenv('DB_NAME');

    if ($conn->select_db($database)) {
        $dbDetails = ['name' => $database, 'tables' => []];

        $tablesResult = $conn->query("SHOW TABLES");
        while ($tableRow = $tablesResult->fetch_row()) {
            $table = $tableRow[0];
            $tableData = ['name' => $table, 'rows' => []];

            $contentResult = $conn->query("SELECT * FROM $table LIMIT 100");
            if ($contentResult) {
                while ($contentRow = $contentResult->fetch_assoc()) {
                    $tableData['rows'][] = $contentRow;
                }
            }

            $dbDetails['tables'][] = $tableData;
        }

        $response[] = $dbDetails;
    } else {
        throw new Exception("Database '$database' not found or access denied.");
    }
} catch (Exception $error) {
    echo json_encode(['error' => $error->getMessage()]);
    exit;
}

$conn->close();

echo json_encode($response);
