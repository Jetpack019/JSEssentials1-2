let s = new Set([1, 30]);
s.add(500);
s.add(50);

for(let e of s) {
    console.log(e); // -> 1  30   500   50
}
console.log([...s]); // -> [1, 30, 500, 50]
console.log(...s); // -> 1  30  500   50
let it = s[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 30
console.log(it.next().value); // -> 500

console.log(it.next()); // -> {done: false, value: 50}



console.log("\n")
let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        return {
            next: function() {
                return {
                    value: undefined,
                    done: false
                }
            }
        }
    }
}
it = almostIterable.iterator(); // -> {next: ƒ}
it.next(); // -> {value: undefined, done: false}


console.log("\n")
let almostIterable2 = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                }
            }
        }
    }
}

let it2 = almostIterable2.iterator();
console.log(it2.next()); // -> {value: 10, done: false}
console.log(it2.next()); // -> {value: 30, done: false}
console.log(it2.next()); // -> {value: 30, done: false}
console.log(it2.next()); // -> {value: 30, done: false}
console.log(it2.next()); // -> {value: 30, done: false}
console.log(it2.next()); // -> {value: 30, done: false}

/*
for( let a of almostIterable2 ) { // -> TypeError: almostIterable is not iterable
    console.log(a); 
}
console.log(...almostIterable2);  // -> TypeError: almostIterable is not iterable
console.log([...almostIterable2]);  // -> TypeError: almostIterable is not iterable
*/
