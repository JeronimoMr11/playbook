const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
       }
       static getInfo(user) {
        return Object.values(user);
      }
    
      static updateUserUsername(user, newUsername) {
        user.setUsername = newUsername;
      }
    
      // Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos.
      static getAllUsernames(usersArr) {
        return usersArr.map((user) => user.username);
      }
}
module.exports = UserService
