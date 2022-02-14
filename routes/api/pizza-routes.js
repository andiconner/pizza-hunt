const res = require('express/lib/response');

const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');


// GET all and POST at /api/pizzas
// /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza); //we simply provide the name of the controller method as the callback


// GET one, PUT, and DELETE at /api/pizzas/:id
// /api/pizzas/:id
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;