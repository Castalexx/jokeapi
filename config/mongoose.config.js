const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/jokes')
.then(() => console.log('Correct conection with the database'))
.catch(() => console.log('Incorrect or null conection'))