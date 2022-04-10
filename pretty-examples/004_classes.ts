// Typescript - Classes
// https://www.typescriptlang.org/docs/handbook/classes.html

import { Animal } from './classes/animal';
import { Gender } from './interfaces/gender';
import { Species } from './interfaces/species';

class DomesticAnimal extends Animal{
    public printDomesticAnimalSpecies = () => {
        return this._species;
    }

    public printDomesticAnimalNumberOfLegs = () =>
        console.log('print domestic animal number of legs: ', this.getNumberOfLegs());
}

const myFirstAnimal = new Animal(Gender.notKnown, Species.amphibian, 4);

myFirstAnimal._gender;
myFirstAnimal.printGender();

const x = myFirstAnimal.species;
// const y = myFirstAnimal.getSpeciesXXX();

myFirstAnimal.species = Species.reptile;
// myFirstAnimal.setSpeciesXXX(Species.reptile);

const myFirstDomesticAnimal = new DomesticAnimal(Gender.male, Species.mammal, 4);
myFirstDomesticAnimal.printDomesticAnimalSpecies();
myFirstDomesticAnimal.printDomesticAnimalNumberOfLegs();



