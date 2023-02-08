const Jokes = require('../models/jokes.models')

const listOfJokes = (req, res) => {
    Jokes.find()
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

const jokeWithId = (req, res) => {
    Jokes.findById(req.params.id)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

const randomJoke = (req, res) => {
    Jokes.count().exec(function(err, count) {
        var random = Math.floor(Math.random() * count)
        Jokes.findOne().skip(random).exec(function(err, result) {
            res.json(result)
        })
    })
    
    
}

const createJoke = (req, res) => {
    console.log(req.body);
    Jokes.create(req.body)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

const editJoke = (req, res) => {
    Jokes.findByIdAndUpdate(req.params.id, {setup: req.body.setup, punchline: req.body.punchline})
    .then(() => {
        Jokes.findById(req.params.id)
        .then((result) => {
            res.json(result)
        })
        
    })
    .catch((error) => {
        console.log(error)
    })
    
}

const deleteJoke = (req, res) => {
    Jokes.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}


module.exports = {
    listOfJokes, createJoke, jokeWithId, randomJoke, editJoke, deleteJoke
}

