let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
    ];
    
    Promise.all(promises)
    .then(a => a.forEach(p => console.log(p)))
    .catch(e => console.log(e));

    Promise.any(promises)
    .then(p => console.log(`any: first resolved ${p}`));
    
    Promise.race(promises)
    .then(p => console.log(`race: first resolved ${p}`));

    Promise.any(promises)
.then(p => console.log(`any: resolved ${p}`))
.catch(e => console.log(`any: rejected ${e}`));

Promise.race(promises)
.then(p => console.log(`race: resolved ${p}`))
.catch(e => console.log(`race: rejected ${e}`));