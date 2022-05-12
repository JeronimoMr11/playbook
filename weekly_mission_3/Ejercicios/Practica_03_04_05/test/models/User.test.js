const User = require('/Users/jesus/Desktop/LaunchX/BackEnd/Semana_03/Practica_03/app/models/User')

describe("Unit Test for User class",()  =>{

test('Create an User object', () =>{

    //Aqui invocas el codigo que vas a usar en tu app
     const user = new User(1, "carlogilmar","carlo","Bio")
     //Aqui validas los resultados de ese codigo 
     //Esta es una comparacion que va a igualar el valor de la izquierda en el valor de la derecha(valor esperado)
     expect(user.id).toBe(1)
     expect(user.username).toBe("carlogilmar")
     expect(user.name).toBe("carlo")
     expect(user.bio).toBe("Bio")

     expect(user.DateCreated).not.toBeUndefined()
     expect(user.LastUpdated).not.toBeUndefined()
});
test('Add getters', () =>{
    const user = new User(1, "carlogilmar", "carlo", "Bio")
    expect(user.getUsername).toBe("carlogilmar")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
});
test('Add setters', () =>{
    const user = new User(1, "carlogilmar","Carlo", "Bio")
    user.setUsername = "Gilmar"
    expect(user.username).toBe("Gilmar")

    user.setBio = "New bio"
    expect(user.bio).toBe("New bio")
});
});