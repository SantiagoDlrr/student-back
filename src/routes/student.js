// importar express y crear router
// importar handler
// importar factory y controller
// crear instancia de servicio, controller y handler
// definir una ruta GET '/' que llame a handler.getAllStudents (con .bind si es necesario)
// exportar router

const express = require('express')

const router = express.Router()

const StudentService = require('../db/service')
const StudentHttpHandler = require('../handlers/student')
const StudentController = require('../controllers/student')

const studentService = new StudentService()
const studentController = new StudentController(studentService)
const studentHandler = new StudentHttpHandler(studentController)

router.get('/', studentHandler.getAllStudents.bind(studentHandler)); 

module.exports = router;
