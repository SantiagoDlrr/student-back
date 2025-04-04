// clase base vacía o abstracta
// puede tener métodos vacíos si quieres usar polimorfismo luego

class FakeService{
    constructor(){
        super()
        this.students = new Map()

        const dummyStudents = [
            { matricula: '001', nombre: 'Ana Torres', calificacion: 90, deuda: 0 },
            { matricula: '002', nombre: 'Luis García', calificacion: 55, deuda: 0 },
            { matricula: '003', nombre: 'Sofía Martínez', calificacion: 85, deuda: 500 },
            { matricula: '004', nombre: 'Pedro Ramírez', calificacion: 60, deuda: 0 },
            { matricula: '005', nombre: 'Marta López', calificacion: 40, deuda: 300 },
          ];

        dummyStudents.forEach((student) => {
            this.students.set(student.matricula, student)
        })
    }

    async getAllStudents () {
        return Array.from(this.students.value)
    }

    

}