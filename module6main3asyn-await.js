function newPromise()
{
return new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('something bad happened')), 1000);
});
}

async function testAsync() {
try {
    let resp = await newPromise();
    console.log(resp);
} catch(error) {
    console.log(`error: ${error.message}`)
}
}

testAsync();