//createSlug dovrebbe ritornare una stringa
//createSlug dovrebbe ritornare una stringa in lowercase
//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
//createSlug dovrebbe incrementare di 1 lo slug quando esiste già
//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
//createSlug dovrebbe lanciare un errore se manca l’array dei post
const createSlug = require("./createSlug")
const {test, expect} = require("@jest/globals")


test("dovrebbe ritornare una stringa in lowercase" , () =>{
    const title = "La Grande Onda Di Hokusai"
    const result = createSlug(title)

    expect(result).toBe("la-grande-onda-di-hokusai")

})




