console.log(`${Math.floor(2.6)} ${Math.ceil(2.3)} ${Math.round(2.5)}`)

console.log(`${Boolean(-1)} ${String(1)}`)

let str = 'sample string';
// let result = str.toUpperCase().split(' ')

console.log(`${str.includes('s')} ${str.indexOf('s')}`)

let year = (new Date(Date.now())).getFullYear()

console.log(year)

let points = [{x:10,y:20},{x:0,y:30},{x:20,y:100}]

let r1 = points.some(e=> e.x === 0)
let r2 = points.every(e=> e.x === 0)
console.log(`${r1} ${r2}`)
let result = points.filter(e => e.y>0 && e.x > 0)

console.log(result)

let result1 = points.sort((p1,p2) => p2.y - p1.y)
console.log(result1)

let result2 = points.map( e => e.x + e.y)
console.log(result2)

let result4 = points.find(e => e.x > 0)
console.log(result4)


let x = [100,101,102,103]
let result3 = x.reduce((e,p) => e + p , 1000)
console.log(result3)


let x1 = ['a','b','c','d']
let y1 = x1.slice(-1,1)
console.log(y1)


let x2= ['a','b','c','d']
x2.splice(2,2)

// console.log(y2)

let a = [1,2,4,5]
let str1 = a.join(' -> ')
console.log(str1)

let s = new Set([1,2,'100'])

s.add(2)
s.add('2')
console.log(`${s.size}`)

console.log(...s)

let m = new Map([[1,'11'],['2',22]]);
m.set(1,'11')
m.set(1,'111')
console.log(`${m.size}`)


let r = new RegExp('.\.js')
console.log(r)

console.log(`${Math.floor(5.7)}  ${Math.ceil(5.2)}  ${Math.round(5.5)}`)

let g = [1,2];

Array.prototype.test = function(){
    console.log('test')
}
let b = [3,4]

a.test()
b.test()