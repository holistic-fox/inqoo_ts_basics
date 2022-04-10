// Typescript basics

console.log('Hello');

// Try to tsc  type change
// let myNumber = 5;
// myNumber = 'xxx';

// Variables declaration

// let myNumber: Number;
// let myString: String;
// let myBool: Boolean;
// let myNull: null;

// let myNumber = 6;
// let myNumber: Number = 6;
// let myString: String = 'My string';
// const myBool: Boolean = true;
// const myNull: null = null;
// let myArray: [] = [];
// let myObject: {} = {};

// Alternative Types
let imAStringOrNumber: string | number;
imAStringOrNumber = 'Im a string';
imAStringOrNumber = 7;
// imAStringOrNumber = true;

// Any Type
let imNotSureWhatIAm: any = 'im a string';
imNotSureWhatIAm = 7;
imNotSureWhatIAm = true;


// Interfaces Basics

interface myObjectInterface {
    myPropA: string,
    myProbB: string,
    myPropC: number,
    myPropO?: boolean,
}

let myObject01: myObjectInterface = {
    myPropA :'AA',
    myProbB: 'BB',
    myPropC: 8
}

let myObject02: myObjectInterface = {
    myPropA: 'A',
    myProbB: 'B',
    myPropC: 7,
    myPropO: true
}

// Typed Arrays
let myTypedArray01: number[];
let myTypedArray02: [number];
myTypedArray02 = [1];

let myTypedArray03: myObjectInterface[];
// myTypedArray03.push(myObject01)
// myTypedArray03.push(myObject02)
// myTypedArray03.push({x: 'test'})

//ENUM number
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const goUp = Direction.Up;
console.log('goUp', goUp)

//Enum string

enum Colors{
    black ='#000000',
    red = '#be1825'
}

