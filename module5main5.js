function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
test(); // -> a: undefined, b: 1, c: undefined, d: 2
test(100); // -> a: 100, b: 1, c: undefined, d: 2
test(100, 200); // -> a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // -> a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // -> a: 100, b: 200, c: 300, d: 400



function greetings(name = 'anonymous') {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, anonymous!
greetings('Alice'); // -> Hi. Alice!



function test(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> length: 3, args: 100 200 300
test(100); // -> length: 1, args: 100




function test2(firstArg, ...anotherArgs) {
    let msg = `frist arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test2(100, 200, 300); // -> frist arg: 100, length: 2, args: 200 300
test2(100); // -> frist arg: 100, length: 0, args: 


function getFile(url, name, mime) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
    }
let parameters = ['https://localhost/files', 'test.json', 'application/json'];
getFile(...parameters); // -> url: https://localhost/files, name: test.json, mime: application/json





function getFile1({url, name, mime}) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters2 = {name: 'test.json', url: 'https://localhost/files', mime: 'application/json'};
getFile1(parameters2); // -> url: https://localhost/files, name: test.json, mime: application/json
getFile1({mime: 'image/jpeg', url: 'http://test.com/rest', name: 'id.jpg'}); // -> url: http://test.com/rest, name: id.jpg, mime: image/jpeg