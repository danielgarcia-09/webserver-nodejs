const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;
 

app.use( express.static( __dirname + '/public' ) );

// * Express HBS engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs')



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Daniel gARCIA',
        year: new Date().getFullYear()
    });
 
})
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Daniel',
        year: new Date().getFullYear()
    });
 
})
app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})