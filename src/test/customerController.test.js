const StudentController = require('../controllers/student'); 
const FakeService = require('../db/service'); 

describe('StudentController', () => {
  let service;
  let controller;

  beforeEach(() => {
    service = new FakeService();
    controller = new StudentController(service);
  });

  test('should return students with correct status', async () => {
    const result = await controller.getAll();

    expect(result).toEqual([
      { matricula: '001', nombre: 'Ana Torres', estatus: 'aprobado' },
      { matricula: '002', nombre: 'Luis García', estatus: 'pendiente' },
      { matricula: '003', nombre: 'Sofía Martínez', estatus: 'restructura' },
      { matricula: '004', nombre: 'Pedro Ramírez', estatus: 'aprobado' },
      { matricula: '005', nombre: 'Marta López', estatus: 'expulsado' },
    ]);
  });

  test('should return empty array if there are no students', async () => {
    service.students.clear();

    const result = await controller.getAll();
    expect(result).toEqual([]);
  });
});