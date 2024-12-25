<?php

function detectEnvironment() {
    $PREV_DOMAIN = "vite.zngr-dynamics.ch";
    $PROD_DOMAIN = "banhmibros.ch";

    if (strpos($_SERVER['HTTP_HOST'], $PREV_DOMAIN) !== false) {
        return '.env.prev';
    } elseif (strpos($_SERVER['HTTP_HOST'], $PROD_DOMAIN) !== false) {
        return '.env.prod';
    }
    return '.env.dev';
}

function loadEnv() {
    $envFile = detectEnvironment();
    $envPath = realpath(__DIR__ . '/../' . $envFile);

    if (!$envPath || !file_exists($envPath)) {
        die("Error: env file '$envFile' not found");
    }

    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0 || empty(trim($line))) continue;

        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);

        putenv("$name=$value");
        $_ENV[$name] = $value;
    }
}