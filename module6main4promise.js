let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 2000);
    }
});


p
  .then((value) => {
    console.log("Resolved value:", value);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error);
  });


