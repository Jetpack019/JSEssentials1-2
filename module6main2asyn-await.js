const value = 200;

async function getSquare(v) {
const response = await fetch(`http://localhost:3000/json?value=${v}`);
const data = await response.json();
console.log(`server: ${v} * ${v} = ${data.square} (${data.time}ms)`);
};

getSquare(200);
console.log(`browser: ${value} * ${value} = ${value * value}`);