const value = 200;

let request = new XMLHttpRequest();

request.addEventListener("load", () => {
if (request.status === 200) {
    const resp = JSON.parse(request.responseText);
    console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
}
});
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();

console.log(`browser: ${value} * ${value} = ${value * value}`);