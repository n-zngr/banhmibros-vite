<?php

require_once 'config.php';

$currentEnv = getEnvironment();
if ($currentEnv === 'dev') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
header('Content-Type: application/json');

try {
    $config = getConfig();
    $servername = $config['DB_SERVER'] ?? null;
    $username = $config['DB_USERNAME'] ?? null;
    $password = $config['DB_PASSWORD'] ?? null;
    $database = $config['DB_NAME'] ?? null;

    if (!$servername || !$username || !$database) {
        throw new Exception("Database configuration is incomplete.");
    }
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    echo json_encode(['error' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}

$response = [];

try {
    if (!$conn->select_db($database)) {
        throw new Exception("Database '$database' not found or access denied.");
    }

    $dbDetails = ['name' => $database, 'tables' => []];
    $tablesResult = $conn->query("SHOW TABLES");
    if ($tablesResult) {
        while ($tableRow = $tablesResult->fetch_row()) {
            $table = $tableRow[0];
            $tableData = ['name' => $table, 'rows' => []];

            $contentResult = $conn->query("SELECT * FROM `$table` LIMIT 100");
            if ($contentResult) {
                while ($contentRow = $contentResult->fetch_assoc()) {
                    $tableData['rows'][] = $contentRow;
                }
                $contentResult->free();
            }

            $dbDetails['tables'][] = $tableData;
        }
        $tablesResult->free();
    } else {
        throw new Exception("Failed to fetch tables from the database.");
    }

    $response[] = $dbDetails;
} catch (Exception $error) {
    echo json_encode(['error' => $error->getMessage()]);
    $conn->close();
    exit;
}

$conn->close();

echo json_encode($response);