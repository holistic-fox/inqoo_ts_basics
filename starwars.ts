import { people } from './sample_data/people';
import { starships } from  './sample_data/starships';
import { IPeople } from './interfaces/IPeople';
import { IStarships } from './interfaces/IStarships';

abstract class StarWarsData{
    protected _people: IPeople[];
    protected _starships: IStarships[];

    constructor(people: IPeople[], starships: IStarships[]) {
        this._people = people;
        this._starships = starships;
    }
}

interface IStealAShip{
    stealShip: () => {}
}

class StarWarsPerson extends StarWarsData implements IStealAShip{
    public stealShip: () => {};
}

const starWarsPerson: StarWarsPerson = new StarWarsPerson(people, starships);
