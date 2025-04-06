// importar express, cors, helmet, dotenv y morgan si los usas
// configurar app con middlewares
// importar ruta de estudiantes
// montar ruta en /api/students
// agregar middleware de errores
// levantar el servidor en el puerto del .env

const express = require('express')

const studentsRoutes = require('./src/routes/student')

const app = express(); 
app.use(express.json())

app.use('/api/students', studentsRoutes)

const PORT = 3000; 

app.listen(PORT)