let funA = function(a, b) {
    return a + b;
    }
    
    let decor = function(fn) {
    return function(arg1, arg2) {
        let result = fn(arg1, arg2);
        console.log(`result ${result}`);
        return result;
    }
}
    
let funB = decor(funA);
    
console.log(funA(3, 4)); // -> 7
funB(3, 4); // -> result 7





// let factorial = function (n) {
//     return n > 1 ? factorial(n-1) * n : 1;
// }
    
// console.log(factorial(3)); // -> 6
// console.log(factorial(5)); // -> 120
// console.log(factorial(10)); // -> 3628800


// let factorial = function (n) {
//     return n > 1 ? factorial(n-1) * n : 1;
//     }

// let decorator = function(fn) {
// let results = new Map();
// return function(n) {
//     let result = results.get(n);
//     if(!result) {
//         result = fn(n);
//         results.set(n, result);
//         console.log(`... calc ${n} -> ${result}`);
//     } else {
//         console.log(`... found ${n} -> ${result}`);
//     }
//     return result;
// }
// }

// let factorial2 = decorator(factorial);
// factorial2(2);
// factorial2(2);
// factorial2(3);
// factorial2(10);
// factorial2(8);


let factorial = function (n) {
    return n > 1 ? factorial(n-1) * n : 1;
}

let decorator = function(fn) {
    let results = new Map();
    return function(n) {
        console.time(n);
        let result = results.get(n);
        if(!result) {
            result = fn(n);
            results.set(n, result);
        }
        console.timeEnd(n);
        return result;
    }
}
let factorial2 = decorator(factorial);

factorial2(2);
factorial2(3);
factorial2(10);
factorial2(8);

