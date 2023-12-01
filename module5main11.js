function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
    
let gen = testGenerator();
    
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}


console.log("\n")

function* testGenerator1() {
    for (let i=10; i<=30; i+=10) {
        yield i;
    }
}
    
let gen2 = testGenerator1();
    
console.log(gen2.next()); // -> {value: 10, done: false}
console.log(gen2.next()); // -> {value: 20, done: false}
console.log(gen2.next()); // -> {value: 30, done: false}
console.log(gen2.next()); // -> {value: undefined, done: true}

console.log("\n")

function* testGenerator3() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}
    
let gen3 = testGenerator3();
    
console.log(gen3.next()); // -> {value: 10, done: false}
console.log(gen3.next()); // -> {value: 20, done: false}
console.log(gen3.next()); // -> {value: 30, done: false}
console.log(gen3.next()); // -> {value: undefined, done: true}


console.log("\n")

let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for(element of this.data) {
            yield element;
        }
    }
}
    
let it = iterable[Symbol.iterator]();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}
    
for( a of iterable ) {
console.log(a); // -> 10  30  60  20  90
}
    
console.log(...iterable); // -> 10  30  60  20  90
console.log([...iterable]); // -> [10  30  60  20  90]



console.log("\n")

let factorialGenerator = function* (range = Infinity) {
    let last = 1;
    for (let index = 1;index <= range; index++){
        last *= index;
        yield last;
    }
}

let factorial = factorialGenerator(3);

console.log(factorial.next()); // -> {value: 1, done: false}
console.log(factorial.next()); // -> {value: 2, done: false}
console.log(factorial.next()); // -> {value: 6, done: false}
console.log(factorial.next()); // -> {value: undefined, done: true}



console.log("\n")
class Factorial {
    constructor(range = Infinity) {
        this.range = range;
    }

    [Symbol.iterator] = function* (){
        let last = 1;
        for(let index = 1; index <= this.range; index++){
            last *= index;
            yield last;
        }        
    }
}
let factorial1 = new Factorial(5);
console.log([...factorial1]); // -> [1, 2, 6, 24, 120]

let it1 = factorial1[Symbol.iterator]();
console.log(it1.next().value); // -> 1
console.log(it1.next().value); // -> 2
console.log(it1.next().value); // -> 6


console.log("\n")
function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for(let i=1; i<=range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}
    
let fibIt1 = fibonacci(10);
console.log([...fibIt1]);
    
let fibIt2 = fibonacci();
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
 
console.log("\n")
let fibIt3 = fibonacci(5);
    for( let f of fibIt3) {
    console.log(f);
}

console.log("\n")
function* cities() {
for(city of ['London', 'Oslo', 'Berlin']) {
    yield city;
}
}

function* test() {
yield* cities();
yield 'Amsterdam'
yield* ['Madrid', 'Rome']
}

console.log([...test()]); // -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']