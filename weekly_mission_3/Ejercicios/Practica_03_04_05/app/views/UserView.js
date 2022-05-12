//Requerimiento 1
const User = require('../models/User')
const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {

    test("Return an error object when try to create a new user with an null payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
})

//Requerimiento 2
test("return an error object when try to create a new user with user with a payload with invalid properties", () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/nesecitan tener un valor valido/)
})

//Requerimiento 3
test("Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {username: "Username"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/nesecitan tener un valor valido/)
})

//Requerimiento 4
test("Create a user by a given valid payload", () => {
    const payload = {username: "username", id: 1, name: "name"}
    const result = UserView.createUser(payload)
    expect(result.name).toBe("name")
    expect(result.username).toBe("username")
    expect(result.id).toBe(1)
})