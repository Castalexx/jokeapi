const mongoose = require('mongoose')


const JokeSchema = mongoose.Schema({
    setup: String,
    punchline: String,
})

const Jokes = mongoose.model('joke', JokeSchema)

module.exports = Jokes;