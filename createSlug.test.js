//createSlug dovrebbe ritornare una stringa
//createSlug dovrebbe ritornare una stringa in lowercase
//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
//createSlug dovrebbe incrementare di 1 lo slug quando esiste già
//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
//createSlug dovrebbe lanciare un errore se manca l’array dei post
const createSlug = require("./createSlug")
const {test, expect} = require("@jest/globals")
const titleArray = require("./db.json")
console.log(titleArray);


test("dovrebbe ritornare una stringa in lowercase con i trattini tra gli spazi" , () =>{
    const title = "Piantagioni di Hokkaido"
    const result = createSlug(title,titleArray)

    expect(result).toBe("piantagioni-di-hokkaido")

})

test("dovrebbe gestire i caratteri accentati" , () =>{
    const title = "Piantagioni dì Hokkàido"
    const result = createSlug(title,titleArray)

    expect(result).toBe("piantagioni-di-hokkaido")

})

test("dovrebbe gestire i caratteri speciali" , () =>{
    const title = "Piantagioni dì Hokkà!!!ido"
    const result = createSlug(title,titleArray)

    expect(result).toBe("piantagioni-di-hokkaido")

})

test("dovrebbe aggiungere un numero in caso di slug coincidenti" , () =>{
    const title = "il-monte-fuji"
    const result = createSlug(title,titleArray)

    expect(result).toBe("il-monte-fuji1")

})




