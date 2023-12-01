let counter = 0; // global variable

function tick() {
return ++counter;
}

console.log(tick()); // -> 1
console.log(tick()); // -> 2
console.log(tick()); // -> 3
console.log(tick()); // -> 3



function tick() {
    let counter = 0;
    return ++counter;
}
    
console.log(tick()); // -> 1
console.log(tick()); // -> 1
console.log(tick()); // -> 1


function getTick() {
    let counter = 10;
    
    return function () {
        return ++counter;
    }
}
    
let tick1 = getTick();
    
console.log(tick1()); // -> 11
console.log(tick1()); // -> 12
console.log(tick1()); // -> 13




function getPoint() {

    function inc(n) {
        return ++n;
    };
    
    return {
        x: 10,
        y: 20,
        incX: function() {
            this.x = inc(this.x);
        },
        incY: function() {
            this.x = inc(this.x);
        }
    };
}
    
let point = getPoint();
console.log(point); // -> {x: 10, y: 20, show: ƒ, incX: ƒ, incY: ƒ}
point.incX();
console.log(point); // -> {x: 11, y: 20, show: ƒ, incX: ƒ, incY: ƒ}