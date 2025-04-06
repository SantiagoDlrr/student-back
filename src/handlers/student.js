// clase StudentHttpHandler
// constructor recibe el controller
// método getAllStudents(req, res)
// try/catch: llama a controller.getAll y regresa res.json

class StudentHttpHandler {
    constructor(studentController) {
        this.studentController = studentController; 
    }
    
    async getAllStudents(req,res) { 
        try {
            const customers = await this.studentController.getAll(); 
            res.json(customers)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = StudentHttpHandler