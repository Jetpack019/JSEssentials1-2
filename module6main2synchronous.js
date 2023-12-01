let showInfo = result => {
    let info = "the arguments are equal";
    if(result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}
    
let compareSync = (a, b, fn) => {
    let r = a - b;
    fn(r);
}
    
console.log("start");
compareSync(10, 5, showInfo);
console.log("end");