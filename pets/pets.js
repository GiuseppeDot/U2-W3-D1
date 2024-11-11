class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this._breed = _breed;
  }
  ownerComparation(y) {
    if (this.ownerName === y.ownerName) {
      return console.log("hanno lo stesso padrone?", true);
    } else {
      console.log("hanno lo stesso padrone?", false);
    }
  }
}

const petOne = new Pets("Fuffy", "Ronfio", "Cane", "Lupo");
const petTwo = new Pets("Lilith", "Luca", "Uccellino", "Picchio rosso");
const petThree = new Pets("Fagiolino", "Ronfio", "Gatto", "Persioano Europeo");

petOne.ownerComparation(petTwo);
petTwo.ownerComparation(petThree);
petOne.ownerComparation(petThree);
