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
        return this.service.getAllStudents()
    }
}