let p = new Promise((resolve, reject) => {
    resolve(5);
    });
    
    p.then(v => {
        console.log(v);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(6), 1000);
        });
    })
    .then(v => {
        console.log(v);
    });