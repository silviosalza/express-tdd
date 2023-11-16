//createSlug dovrebbe ritornare una stringa
//createSlug dovrebbe ritornare una stringa in lowercase
//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
//createSlug dovrebbe incrementare di 1 lo slug quando esiste già
//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
//createSlug dovrebbe lanciare un errore se manca l’array dei post
const createSlug = require("./createSlug")
const {test, expect} = require("@jest/globals")
const titleArray = require("./db.json")


test("dovrebbe ritornare una stringa in lowercase con i trattini tra gli spazi" , () =>{
    const title = "Il Monte Fuji"
    const result = createSlug(title)

    expect(result).toBe("il-monte-fuji")

})

test("dovrebbe gestire i caratteri accentati" , () =>{
    const title = "il montè fujì"
    const result = createSlug(title)

    expect(result).toBe("il-monte-fuji")

})

test("dovrebbe gestire i caratteri speciali" , () =>{
    const title = "il montè fujì///&%"
    const result = createSlug(title)

    expect(result).toBe("il-monte-fuji")

})



