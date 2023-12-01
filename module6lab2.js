function myDecorator(func) {
    const usedArguments = new Set();
  
    return function (...args) {
      const argString = args.join(',');
      if (usedArguments.has(argString)) {
        console.log(`arguments already used: ${argString}`);
      } else {
        usedArguments.add(argString);
        return func(...args);
      }
    };
  }
  
  let sum = function (...args) {
    let retVal = 0;
    for (let arg of args) {
      retVal += arg;
    }
    return retVal;
  }
  
  let dfn = myDecorator(sum);
  dfn(2, 3, 4);
  dfn(4, 5);
  dfn(2, 3, 4); // -> arguments already used: 2,3,4
  dfn(4, 5); // -> arguments already used: 4,5
  