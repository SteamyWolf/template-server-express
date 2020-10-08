const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 3000

const planets = require('./planets');


let planetsArr = [];
function planetMap() {
    planets.map(planet => {
        let planetObj = {
            name: planet.name,
            population: planet.population,
            terrain: planet.terrain,
            climate: planet.climate,
            gravity: planet.gravity
        }
        planetsArr.push(planetObj)
    })
}
planetMap();




app.engine('handlebars', expbs({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts') }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', planets: planetsArr })
})

app.get('/about', (req, res) => {
    res.render('about',{ title: 'About Me' })
})


app.listen(port, () => {
    console.log('Server is listening at port ', 3000)
})