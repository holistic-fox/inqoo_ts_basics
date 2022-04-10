import { people } from './sample_data/people';
import { starships } from  './sample_data/starships';

const random = () => Math.floor(Math.random()*10000);

const generateIdsForArrayElems = <T>(array: T[]): (T & {id: number})[] => {
    return array.map((item ) => ({id: random(), ...item}));
}

console.log(generateIdsForArrayElems(people));
console.log(generateIdsForArrayElems(starships));

//HOMEWORK
// Make sure random generated ids are uniq
