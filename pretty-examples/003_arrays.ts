// Arrays and functions

import { Gender } from './interfaces/gender';
import { Person } from './interfaces/person';
import { Starship } from './interfaces/starship';

//EX 1

// function isStarshipMoreExpensiveThen(starship: Starship, costLimit: number = 300000): boolean {
//     return Number(starship.cost_in_credits) > costLimit;
// }
const isStarshipMoreExpensiveThen = (starship: Starship, costLimit: number = 300000): boolean =>
    Number(starship.cost_in_credits) > costLimit

// isStarshipMoreExpensiveThen(starships[10], 2000000);
// isStarshipMoreExpensiveThen(starships[10], '2000000');
// isStarshipMoreExpensiveThen(people[10]);

// EX 2
const getStarshipsMoreExpensiveThen = (starships: Starship[], costLimit: number = 300000): Starship[] =>
    starships.filter((starship) => isStarshipMoreExpensiveThen(starship, costLimit));

// EX 3

const doesPersonMeetRequirements = (person: Person, heightLimit = 170, genderType = Gender.male): boolean =>
    Number(person.height) > heightLimit && person.gender === genderType;

const getPeopleListThatMeetRequirements
    = (people: Person[], heightLimit = 170, genderType = Gender.male): Person[] =>
    people.filter((p) => doesPersonMeetRequirements(p, heightLimit, genderType));
