// importar express, cors, helmet, dotenv y morgan si los usas
// configurar app con middlewares
// importar ruta de estudiantes
// montar ruta en /api/students
// agregar middleware de errores
// levantar el servidor en el puerto del .env

const express = require('express')

const app = express(); 

const PORT = 3001; 

app.listen(PORT)