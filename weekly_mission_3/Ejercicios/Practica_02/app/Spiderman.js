class Spiderman {
  constructor(name, age, actor, numMovies, studio) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.numMovies = numMovies;
    this.studio = studio;
  }

  getInfo() {
    return `Hey, I'm ${this.actor} from ${this.studio} studio`;
  }
}

module.exports = Spiderman;