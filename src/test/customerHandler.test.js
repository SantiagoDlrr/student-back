const StudentHttpHandler = require('../handlers/student');
const StudentController = require('../controllers//student'); 

describe('StudentHttpHandler', () => {
  let controller;
  let handler;

  beforeEach(() => {
    controller = {
      getAll: jest.fn()
    };

    handler = new StudentHttpHandler(controller);
  });

  test('should return all students in JSON format', async () => {
    const mockStudents = [
      { matricula: '001', nombre: 'Ana Torres', estatus: 'aprobado' },
      { matricula: '002', nombre: 'Luis García', estatus: 'pendiente' },
    ];
    controller.getAll.mockResolvedValue(mockStudents);

    const req = {};
    const res = {
      json: jest.fn()
    };

    await handler.getAllStudents(req, res);

    expect(controller.getAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockStudents);
  });

  test('should return 500 and error message if controller throws', async () => {
    const fakeError = new Error('i');
    controller.getAll.mockRejectedValue(fakeError);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await handler.getAllStudents(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'i' });
  });
});