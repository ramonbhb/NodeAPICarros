const { Router } = require('express');
const routes = Router();
const CarrosController = require('../controller/CarrosController');

/* MVC
    Model -> Acesso ao Dado
    View -> ROtas
    Controller -> Lógica de Negócio
*/

routes.get('/', (req,res) => {
    res.statusCode = 200;
    res.json({mensagem: "Hello World"});
});

routes.get('/carros', CarrosController.listarCarros);
routes.get('/carro/:id', CarrosController.listarCarro);
routes.get('/carros/marca', CarrosController.listarCarrosMarca);
routes.post('/carros', CarrosController.inserirCarro);
routes.put('/carro/:id', CarrosController.atualizarCarro);
routes.delete('/carro/:id', CarrosController.deletarCarro);


// routes.get('/' {});

module.exports = routes;