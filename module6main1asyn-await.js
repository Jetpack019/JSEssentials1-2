function newPromise()
{
return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});
}

async function testAsync() {
console.log('testAsync start');
let resp = await newPromise();
console.log(resp);
console.log('testAsync end');
}

console.log('before testAsync ...');
testAsync();
console.log('... after testAsync');