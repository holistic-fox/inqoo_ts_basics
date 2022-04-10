import { Gender } from '../interfaces/gender';
import { Species } from '../interfaces/species';

export class Animal{
    public _gender: Gender;
    protected _species: Species;
    private _numberOfLegs: number;

    constructor(gender: Gender, species: Species, numberOfLegs: number) {
        this._gender = gender;
        this._species = species;
        this._numberOfLegs = numberOfLegs;
    }

    public printGender = (): void => console.log('gender is: ', this._gender);
    protected printSpecies = (): void => console.log('species is: ', this._species);
    private printNumberOfLegs = (): void => console.log('number of legs is: ', this._numberOfLegs);

    get species(){
        return this._species;
    }
    set species(value){
        this._species = value;
    }

    // getSpeciesXXX(){
    //     return this._species;
    // }
    //
    // setSpeciesXXX(value: Species){
    //     this._species = value;
    // }

    protected getNumberOfLegs = () => this._numberOfLegs;
}
