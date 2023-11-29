const { cadastrarUsuario, loginUsuario } = require("../controladores/usuarios");

describe("registerUser", () => {
  let originalQuery; // Para armazenar a função original do pool.query

  beforeEach(() => {
    // Mock da conexão com o banco de dados
    originalQuery = require("../conexao").query;
    require("../conexao").query = jest.fn();
  });

  afterEach(() => {
    // Restaurando a função original do pool.query após o teste
    require("../conexao").query = originalQuery;
  });

  it("should register a new user successfully and return 201", async () => {
    const req = {
      body: {
        nome: "Gutemberg Lima",
        email: "guto@gmail.com",
        senha: "123456",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock da função query para retornar um objeto simulando o comportamento do banco
    const retornoDoBanco = {
      rows: [{ id: 1, nome: req.body.nome, email: req.body.email }],
    };
    require("../conexao").query.mockResolvedValue(retornoDoBanco);

    await cadastrarUsuario(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      nome: req.body.nome,
      email: req.body.email,
    });
  });

  it("should verify login succesfully and return 200", async () => {
    const req = {
      body: {
        email: "guto9@gmail.com",
        senha: "123456",
      },
    };
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    await loginUsuario(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
