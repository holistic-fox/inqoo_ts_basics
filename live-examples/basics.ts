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
    myPropA: 'AA',
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

enum Colors {
    black = '#000000',
    red = '#be1825',
    blue = '#0c5682'
}

const black = Colors.black;
console.log('black', black);

//FUNCTIONS

function iDoNothing(): void{
    // return 'x';
}

function iReturnString(): string {
    return 'Im a string';
}

function iReturnMyInput(input: boolean): boolean{
    return input;
}

function iReturnMyInputDefault(input: boolean = true): boolean{
    return input;
}
iReturnMyInput(false);
iReturnMyInputDefault();
iReturnMyInputDefault(false);

function myInputParams(a: string, b: number, c: boolean, o: number = 9)
    : [string, number, boolean, number]{
    return [a, b, c, o];
}

function myInputParams02(a: string, b?: number): [string, number]{
    return [a, b];
}

console.log('myInputParams02 only a', myInputParams02('a'))
console.log('myInputParams02 a and b', myInputParams02('a', 7))


function myIObject(object: myObjectInterface): myObjectInterface{
    return object;
}

myIObject({myPropA: 'a', myProbB: 'b', myPropC: 7});
myIObject({myPropA: 'a', myProbB: 'b', myPropC: 7, myPropO: true});

myInputParams('im a string', 7, true);
myInputParams('im a string', 7, true, 0);
