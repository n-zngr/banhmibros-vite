<?php

function getEnvironment() {
    $configFilePath = __DIR__ . '/api-config.json';

    if (!file_exists($configFilePath)) {
        throw new Exception("API config not found: $configFilePath");
    }

    $configData = json_decode(file_get_contents($configFilePath), true);
    $hostname = $_SERVER['HTTP_HOST'];

    if (stripos($hostname, parse_url($configData['previewApiUrl'], PHP_URL_HOST)) !== false) {
        return 'prev';
    } elseif (stripos($hostname, parse_url($configData['productionApiUrl'], PHP_URL_HOST)) !== false) {
        return 'prod';
    }

    return 'dev';
}

function loadEnvironmentConfig($env) {
    $configFilePath = __DIR__ . "/../config.$env.php";

    if (!file_exists($configFilePath)) {
        throw new Exception("Environment config file not found: $configFilePath");
    }

    require_once $configFilePath;
}

function getConfig() {
    $env = getEnvironment();
    
    // Load the specific configuration file
    loadEnvironmentConfig($env);

    $config = [
        'ENVIRONMENT' => $env,
    ];

    // Add database-related constants if they are defined
    if (defined('DB_SERVER')) {
        $config['DB_SERVER'] = DB_SERVER;
    }
    if (defined('DB_NAME')) {
        $config['DB_NAME'] = DB_NAME;
    }
    if (defined('DB_USERNAME')) {
        $config['DB_USERNAME'] = DB_USERNAME;
    }
    if (defined('DB_PASSWORD')) {
        $config['DB_PASSWORD'] = DB_PASSWORD;
    }

    return $config;
}