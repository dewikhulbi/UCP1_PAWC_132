const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Routes untuk CRUD
router.get('/', animalController.getAllAnimals);
router.get('/add', animalController.addAnimalForm);
router.post('/add', animalController.addAnimal);
router.get('/edit/:id', animalController.editAnimalForm);
router.put('/edit/:id', animalController.updateAnimal);
router.delete('/delete/:id', animalController.deleteAnimal);

module.exports = router;
