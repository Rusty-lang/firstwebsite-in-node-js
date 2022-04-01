const express = require('express');
const colors = require('colors')
const path = require('path');

const app = express();

//settings
app.set('port', 3000);
app.set('view engine', 'ejs');//motor de plantilla
app.set('views', path.join(__dirname, 'views'));

// server
app.listen(app.get('port'), ()=>{
    console.log("Listening in port 3000".blue)
})

// static files
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(require('./routes/routes.js'));