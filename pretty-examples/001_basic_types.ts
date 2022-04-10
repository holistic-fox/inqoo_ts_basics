/* Typescript Basic Types

    Install npm
    https://www.npmjs.com/get-npm

    Global install of typescript
    sudo npm install -g typescript

    Check current typescript version installed
    tsc --version
*/
console.log('Typescript Basic Types');

// EXAMPLE 1

var imAVar = "I'm a string";
let imALet = "I'm a let";
const imAConst = "I'm a const";

// EXAMPLE 2

function doSomethingVar(){
    for(var i = 0; i < 5; i++){
        console.log('i: ', i);
    }
    console.log('Last i:', i);
}
// doSomethingVar();

function doSomethingLet(){
    for(let i = 0; i < 5; i++){
        console.log('i: ', i);
    }
    // console.log('Last i:', i);
}
// doSomethingLet();

// EXAMPLE 3

// let myLuckyNumber;
// console.log('myLuckyNumber: ', myLuckyNumber);
// console.log('myLuckyNumber type is: ', typeof myLuckyNumber);
//
// myLuckyNumber = 7;
//
// console.log('myLuckyNumber:', myLuckyNumber);
// console.log('myLuckyNumber type is: ', typeof myLuckyNumber);
//
// myLuckyNumber = false;
//
// console.log('myLuckyNumber:', myLuckyNumber);
// console.log('myLuckyNumber type is: ', typeof myLuckyNumber);
//
// myLuckyNumber = "I'm a lucky number";
//
// console.log('myLuckyNumber:', myLuckyNumber);
// console.log('myLuckyNumber type is: ', typeof myLuckyNumber);

// EXAMPLE 4

// let myLuckyNumberTS: number;
//
// console.log('myLuckyNumberTS:', myLuckyNumberTS);
// console.log('myLuckyNumberTS type is: ', typeof myLuckyNumberTS);
//
// myLuckyNumberTS = 7;
// myLuckyNumberTS = 9;
// myLuckyNumberTS = 25;
//
// myLuckyNumberTS = true;
// myLuckyNumberTS = 'String';

// EXAMPLE 5

let myLuckyNumber: number = 7;
let myFavoriteText: string = 'Lorem ipsum';
let imTrueOrFalse: boolean = true;
let imNull: null = null;
let imUndefined: undefined = undefined;
let imAnArray: [] = [];
let imAnObject01: {} = {};
let imAnObject02: Object = {};
let imNotSureWhatIAm: any;
let imAnArrayOfNumbers01: number[];
let imAnArrayOfNumbers02: [number];
let imAnArrayOfNumbers03: Array<number>;

// myLuckyNumber = null;
// myLuckyNumber = undefined;

imNotSureWhatIAm = 'string';
imNotSureWhatIAm = 6;
imNotSureWhatIAm = [];

// EXAMPLE 6

enum color { Red = 'red', Blue = 'blue', Green = 'green' };

console.log('color.Red:', color.Red)
console.log('color.Blue:', color.Blue)
console.log('color.Green:', color.Green)

enum size { small, medium, large, xlarge};

console.log('size.small:', size.small)
console.log('size.medium:', size.medium)
console.log('size.large:', size.large)
console.log('size.xlarge:', size.xlarge)

// EXAMPLE 7

function iDoNothing(): void {
};

// EXAMPLE 8

let x: string | number = 5;
const z: string | number = '5';

// x = true;
