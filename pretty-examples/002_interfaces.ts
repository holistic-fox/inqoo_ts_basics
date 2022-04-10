/* Typescript Interfaces
*  https://www.typescriptlang.org/docs/handbook/2/objects.html
*/

import { Category } from './interfaces/category';
import { Article } from './interfaces/article';

const myFirstArticle: Article = {
    author: {
        firstName: 'Michał',
        lastName: 'Witek',
        birthDate: new Date('November 16, 1990 23:15:30'),
        getAge: (birthDate) => new Date().getFullYear() - birthDate.getFullYear()
    },
    title: 'Typescript Interface Basics',
    topic: 'Programming',
    creationDate: new Date(),
    tag: ['#JS', '#TS'],
    category: Category.Science
};

console.log('myFirstArticle', myFirstArticle);
console.log('myFirstArticle.author.getAge()', myFirstArticle.author.getAge(myFirstArticle.author.birthDate))
