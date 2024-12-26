<?php

function detectEnvironment() {
    $PREV_DOMAIN = "vite.zngr-dynamics.ch";
    $PROD_DOMAIN = "banhmibros.ch";

    if (strpos($_SERVER['HTTP_HOST'], $PREV_DOMAIN) !== false) {
        return 'prev';
    } elseif (strpos($_SERVER['HTTP_HOST'], $PROD_DOMAIN) !== false) {
        return 'prod';
    }
    return 'dev';
}

function loadConfig() {
    $env = detectEnvironment();

    $config = [
        'dev' => [
            'ENVIRONMENT' => 'dev',
            'API_URL' => 'http://localhost:8000/api',
            'DB_SERVER' => 'localhost',
            'DB_NAME' => 'dev_banhmibros',
            'DB_USERNAME' => 'root',
            'DB_PASSWORD' => 'admin'
        ],
        'prev' => [
            'ENVIRONMENT' => 'prev',
            'API_URL' => 'https://vite.zngr-dynamics.ch/api'
        ],
        'prod' => [
            'ENVIRONMENT' => 'prod',
            'API_URI' => 'https://banhmibros.ch'
        ]
    ];

    foreach ($config[$env] as $key => $value) {
        putenv("$key=$value");
        $_ENV[$key] = $value;
    }
}