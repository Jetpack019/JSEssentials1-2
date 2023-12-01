let showInfo = result => {
    let info = "the arguments are equal";
    if(result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
    }
    
let compareAsync = (a, b, fn) => {
    let r = a - b;
    setTimeout(fn, 1000, r);
};
    
console.log("start");
compareAsync(10, 5, showInfo);
console.log("end");

