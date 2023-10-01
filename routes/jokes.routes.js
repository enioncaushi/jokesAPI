const express = require('express');
const router = express.Router();
const JokeController = require('../controllers/jokes.controller');

router.get('/', JokeController.getAllJokes);
router.get('/random', JokeController.getRandomJoke);
router.get('/:id', JokeController.getOneJoke);
router.post('/', JokeController.createJoke);
router.patch('/:id', JokeController.updateJoke);
router.delete('/:id', JokeController.deleteJoke);

module.exports = router;
