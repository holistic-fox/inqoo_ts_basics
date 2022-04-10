import { people } from './sample_data/people';
import { starships } from  './sample_data/starships';
import { IPerson } from './interfaces/IPerson';
import { IStarship } from './interfaces/IStarship';

abstract class StarWarsData{
    protected _people: IPerson[];
    protected _starships: IStarship[];

    constructor(people: IPerson[], starships: IStarship[]) {
        this._people = people;
        this._starships = starships;
    }
}

interface IStealAShip{
    stealShip: (name: string) => { person: IPerson, starship: IStarship }
}

class StarWarsPerson extends StarWarsData implements IStealAShip{
    stealShip = (name: string): { person: IPerson, starship: IStarship } => {
        const person = this.findPerson(name);
        const index = this.getRandomIndex(this._starships.length);
        return { person, starship: this._starships[index]};
    };

    private findPerson = (name: string): IPerson =>
        // @ts-ignore
        this._people.find(person => person.name === name);

    private getRandomIndex = (arrayLength: number): number =>
        Math.floor(Math.random() * arrayLength)

}

const starWarsPerson: StarWarsPerson = new StarWarsPerson(people, starships);

console.log(starWarsPerson.stealShip('Han Solo'))
