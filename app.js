const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!!!'))

// GET /pokemons -> list all pokemons http://localhost:3000/pokemon


class pokemons {

    constructor(name,types,type2){
        this.name = name
        this.type = types
        this.type2 = type2
        this.id = null
    }
    AddTyes2(type){
        this.type2 = type
    }
}
function CreatePokemon(name,type){
    let p = new pokemons (name,type)
    p.id = generatorNewId(poke.length)
    return p 
}

function generatorNewId(num){
    return  num+1
}
function isSufficientPameter(v){
    return  v!== undefined || V!== null || V!== ''
}

function getPokemonById(id){
    return poke[id-1] !== undefined && poke[id-1] !== null
}

let poke = []
poke.push(CreatePokemon('Mega Charizard X','Fire'))
poke.push(CreatePokemon('Ash-Greninja','water'))

// let poke = [{ name: 'Mega Charizard X', type: "Fire" }
//     , { name: 'Ash-Greninja', type: "water" },
//     , { name: 'Sceptile', type: "Grass" }
// ]

app.get('/pokemons', (req, res) => res.send(poke))

// POST /pokemons -> add pokemon to list
app.post('/pokemons', (req, res) => {

        if (isSufficientPameter(req.body.name)||
            isSufficientPameter(req.body.type)){
                res.status(400).send({error :'Insufficien paraments: name and type are required paramenter '})
                return
        }

        let p = new CreatePokemon(req.body.name,req.body.type)
        poke.push(p)
        res.sendStatus(201)   
            // console.log(req.body)
            //res.send(req.body)
})

app.get('/pokemons/:id', (req, res) => {
    let id = req.params.id
    let p = poke[id - 1]
    res.send(p)
})
app.put('/pokemon/:id', (req, res) => {
    
    // if (!isSufficientPameter(req.body.type2)){
    //     res.status(400).send({error :'Insufficien paraments: name and type are required paramenter '})
    //     return
    // }
    // if (!isSufficientPameter(req.params.id)){
    //     res.status(400).send({error :'Insufficien paraments: name and type are required paramenter '})
    //     return
    // }
    let id = req.params.id
    let p = poke[id - 1]
    // if (!getPokemonById(id)){
    //     res.status(400).send({error :'Canot update pokemon: Pokemon is not fount'})
    //     return
    // }

    p.type2 = p.body.type2
    console.log(p.type2)
    poke[id-1] = p
    res.sendStatus(200)   
})

app.delete('/pokemom/:id' ,(req,res) => {

    if (!isSufficientPameter(req.params.id)){
        res.status(400).send({error :'Insufficien paraments: name and type are required paramenter '})
        return
    }
    let id = req.params.id
    if (!getPokemonById(id)){
        res.status(400).send({error :'Cannot delete pokemon: Pokemon is not found'})
        return
    }

    delete poke[id-1]
    res.sendStatus(204)
})

app.listen(port, () => console.log(`Pokemon API listen  on port ${port}!`))


