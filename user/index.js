class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageComparation(y) {
    if (this.age > y.age) {
      return console.log(this.firstName, " è più vecchio di", y.firstName);
    } else {
      console.log(y.firstName, " è più vecchio di ", this.firstName);
    }
  }
}

const Mario = new User("Mario", "Rossi", 30, "Foggia");
const Luigi = new User("Luigi", "Verdi", 48, "Foggia centro");

Mario.ageComparation(Luigi);
