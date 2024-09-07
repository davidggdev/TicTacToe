<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Roboto google font -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <main>
        <h1>Hi world!</h1>
    </main>

    <script src="js/app.js"></script>
</body>

</html>

<?php

// try {
//     // Database path
//     $databasePath = '../db/database.sqlite';

//     // Connect to SQLite database
//     $pdo = new PDO('sqlite:' . $databasePath);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//     // Query
//     $sql = "SELECT * FROM users";
//     $stmt = $pdo->query($sql);
//     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

//     if (count($users) > 0) {
//         echo "Usuarios encontrados:\n";
//         foreach ($users as $user) {
//             echo "ID: " . $user['id'] . "\n";
//             echo "Nombre: " . $user['name'] . "\n";
//             echo "Email: " . $user['email'] . "\n";
//             echo "Edad: " . $user['age'] . "\n\n";
//         }
//     } else {
//         echo "No se encontraron usuarios.\n";
//     }
// } catch (PDOException $e) {
//     echo "Error al consultar la tabla: " . $e->getMessage() . "\n";
//     exit(1);
// }
