let point = (x=0,y=0,z) =>{
    console.log(`${x} ${y} ${z}`)
}
point(100)

let fn = function(a,b,...rest){
    console.log(`${a.length} ${rest.length}`)
}

fn('a','b','c','d','e')

let fn1 = function(a,b,c,d){
    console.log(`${a} ${b} ${c}  ${d}`)
}

let letters = ['a','b','c','d']
fn1('x',...letters)


let fn2= function(){
    let t = []
    return function(n){
        t.push(n);
        return t.length
    }
}

let ifn = fn2()
console.log(`${ifn(2)}  ${ifn(1)} ${ifn(3)}`)

let fn4 = function(msg, n){
    console.log(`${msg} : ${this.a ** n}`)
}

let bfn = fn4.bind({a:5},'result');
bfn(2,3)


function* testGenerator(){
    let data = [10,20];
    for (let element of data){
        yield element
    }
}
let gen =  testGenerator()
gen.next()
console.log(`${gen.next().value} ${gen.next().done}`)

let set = new Set([10,20,40])
let it = set[Symbol.iterator]()
console.log(`${[...set]} ${[...it]}`)





function* testGenerator(n){
    let ret = 0
    while(true){
        yield ret += n;
    }
}

let gen1 = testGenerator(2)
console.log(`${gen1.next().value} ${gen1.next().value} ${gen1.next().value}`)




function* testGenerator1(){
    yield* ['a','b','c','d']
}
let gen2 = testGenerator1()
console.log(`${gen2.next().value} ${gen2.next().value}`)



let  p  = new Promise(function (resolve,reject) {
    setTimeout(() => resolve('resolved'), 1000)
  })

  p.finally(() => console.log('finally')).then(a =>console.log('then')).catch(b=>console.log('catch'))



let p1 = new Promise(function(resolve){
    setTimeout(()=> resolve(10),100)
})

let r1 = new Promise(function(resolve){
    setTimeout(()=>resolve(30),200)
})

p1.then(a=>{
    console.log(a)
    return 20
}).then(a=>{
    console.log(20)
    return r1
}).then(a=>{
    console.log(a)
})