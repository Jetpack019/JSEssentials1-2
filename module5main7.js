(function(msg){
    console.log(msg);
})('test IIFE'); // -> test IIFE


(function () {
    let a = 10;
    let b = 20;
    let result;

    let sum = function (x, y) {
        return x + y;
    }

    result = sum(a, b);
    console.log(result); // -> 30
})();

// console.log(result); // -> Undefined ReferenceError: result is not defined


let point = {
    x: 100,
    y: 200,
    testThis: function() {
        console.log(this);
    },
    show: function() {
        console.log(`${this.x}:${this.y}`);
    }
}
point.testThis(); // -> {x: 100, y: 200, test: ƒ}
point.show(); // -> 100:200






'use strict';

let point1 = {
x: 100,
y: 200
}

function showPoint(msg,again) {
console.log(this);  // -> {x: 100, y: 200}
console.log(`${msg} ${again} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.call(point1, 'coordinates1','yeah');



'use strict';

let point3 = {
    x: 100,
    y: 200
}

function showPoint2(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint2.apply(point3, ['coordinates2']);



'use strict';

let point4 = {
    x: 100,
    y: 200
}

function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}

let showCoordinates = showPoint.bind(point4, 'coordinates3');
let show = showPoint.bind(point4);

showCoordinates(); // -> coordinates [100:200]
showCoordinates('point'); // -> coordinates [100:200]
show('point new'); // -> point [100:200]


