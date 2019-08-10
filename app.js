const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!!!'))

// GET /pokemons -> list all pokemons http://localhost:3000/pokemon

let poke = [{ name: 'Mega Charizard X', type: "Fire" }
    , { name: 'Ash-Greninja', type: "water" },
    , { name: 'Sceptile', type: "Grass" }
]

app.get('/pokemons', (req, res) => res.send(poke))

// POST /pokemons -> add pokemon to list
app.post('/pokemons', (req, res) => {
         poke.push(req.body)
         res.sendStatus(201)   
            // console.log(req.body)
            //res.send(req.body)
})

app.listen(port, () => console.log(`Pokemon API listen  on port ${port}!`))