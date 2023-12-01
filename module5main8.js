let sum = function(a, b) {
    return a + b;
};

console.log(sum(10, 20)); // -> 30

function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}
console.log(executeOperation(sum, 10, 20)); // -> 30



function getMultiplyBy(multiplier) {
    return function(a) {
        return a * multiplier;
    }
}
let multiplyBy3 = getMultiplyBy(3);
console.log(multiplyBy3(2)); // -> 6
console.log(getMultiplyBy(5)(10)); // -> 50