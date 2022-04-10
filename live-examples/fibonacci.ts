function fibonacciSequenceA(n: number): number {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacciSequenceA(n-1) + fibonacciSequenceA(n-2);
}

function fibonacciSequenceB(n: number) {
    let first: number = 0;
    let second: number = 1;
    if( n <= 2 ){
        return n-1;
    }
    for(let i = 1; i < n; i++){
        let temp = second;
        second = temp + first;
        first = temp;
    } return second;
}

console.log('A: ', fibonacciSequenceA(45))
console.log('B: ', fibonacciSequenceB(45))
