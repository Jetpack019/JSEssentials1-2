

  let a = [1,2]
  Array.prototype.test = function () {
    console.log('test')
    }
let b = [3,4]
a.test()
b.test()