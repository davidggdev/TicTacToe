<?php

try {
    // Ruta a la base de datos SQLite (creará el archivo si no existe)
    $databasePath = __DIR__ . '/db/database.sqlite';
    $pdo = new PDO('sqlite:' . $databasePath);

    // Establecer el modo de error de PDO para que arroje excepciones
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Crear la tabla 'users' si no existe
    $sql = "
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        age INTEGER
    );
    ";

    // Ejecutar la creación de la tabla
    $pdo->exec($sql);

    echo "Tabla 'users' creada correctamente.\n";

    // Opcional: Insertar algunos datos de ejemplo
    $sqlInsert = "
    INSERT INTO users (name, email, age) VALUES
    ('John Doe', 'johndoe@example.com', 30),
    ('Jane Smith', 'janesmith@example.com', 25);
    ";

    $pdo->exec($sqlInsert);

    echo "Datos insertados correctamente.\n";
} catch (PDOException $e) {
    echo "Error al crear la tabla: " . $e->getMessage() . "\n";
    exit(1);
}
