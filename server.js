const express = require('express')
const app = express()
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

const port = process.env.port || 3000

app.use(express.static(__dirname + '/public'));
// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'arturo rivera',
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Arturo',
    });
})

app.listen(port, () => console.log(`Escuchando en puerto ${port}`));