let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});
    
let handleResolved = function (value) {
    console.log(value);
}
    
let handleRejected = function (error) {
    console.log(`Error: ${error.message}`);
}
    
p.then(handleResolved, handleRejected);
    
console.log('end');

