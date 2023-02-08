const { listOfJokes, createJoke, jokeWithId, randomJoke, editJoke, deleteJoke } = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/jokes', listOfJokes)

    app.get('/api/jokes/random', randomJoke)

    app.get('/api/jokes/:id', jokeWithId)

    app.post('/api/new', createJoke)

    app.put('/api/jokes/update/:id', editJoke)

    app.delete('/api/delete/:id', deleteJoke)

    
}