function getPromiseArray(arr) {
    const promises = arr.map((element) => {
      return new Promise((resolve, reject) => {
        if (typeof element === 'number' && element > 0) {
          setTimeout(() => {
            resolve(element);
          }, element);
        } else {
          reject(new Error(`${element} is not a positive integer`));
        }
      });
    });
  
    return promises;
  }
  
  let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
  
  Promise.all(promises1)
    .then((a) => console.log(`all: ${a}`))
    .catch((e) => console.log(`all: ${e.message}`));
  
  Promise.race(promises1)
    .then((a) => console.log(`any: ${a}`))
    .catch((e) => console.log(`any: ${e.message}`));
  