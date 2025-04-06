// clase StudentController
// constructor recibe el servicio
// método getAll debe obtener todos los estudiantes
// aplicar la lógica de negocio para agregar el estatus:
// - aprobado: calificacion >= 60 y deuda == 0
// - pendiente: calificacion < 60 y deuda == 0
// - reestructura: calificacion >= 60 y deuda > 0
// - expulsado: calificacion < 60 y deuda > 0
// regresar lista con objetos: { matricula, nombre, estatus }


class StudentController {
    constructor(service){
        this.service = service
    }

    async getAll(){ 
        const students = await this.service.getAllStudents(); 
        const studentsStatus = []; 

        students.forEach((student) => {
            if(student.calificacion >= 60 && student.deuda == 0){
                studentsStatus.push({matricula: student.matricula, nombre: student.nombre, estatus: "aprobado"})
            }else if (student.calificacion < 60 && student.deuda == 0){
                studentsStatus.push({matricula: student.matricula, nombre: student.nombre, estatus: "pendiente"})
            }else if (student.calificacion >= 60 && student.deuda > 0){
                studentsStatus.push({matricula: student.matricula, nombre: student.nombre, estatus: "restructura"})
            }else{
                studentsStatus.push({matricula: student.matricula, nombre: student.nombre, estatus: "expulsado"})
            }
        });

        return studentsStatus
    }
}

module.exports = StudentController;
