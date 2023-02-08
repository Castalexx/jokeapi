const express = require('express');
const app = express();
const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Server listen at the port ${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// MongoDB
require('./config/mongoose.config')

// Rutas
const routesJokes = require('./routes/jokes.routes')
routesJokes(app)