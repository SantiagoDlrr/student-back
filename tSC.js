
// Importar el servicio (rquire)
// instancia del servicio 
// funcion para usar el servicio try / catsh 

const service = require('./src/db/service')
const controller = require('./src/controllers/student')


const studentService = new service()
const studentController = new controller(studentService)

async function testGetallStudents () {
    try {
        const students = await studentController.getAll()
        console.log(students)
    }catch(error) {
        console.error(error.message)
    }
} 

testGetallStudents()