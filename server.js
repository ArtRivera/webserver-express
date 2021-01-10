const express = require('express')
const app = express()
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

const corsOptions = function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    return next();
};


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