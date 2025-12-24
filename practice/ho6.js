

function low(display){
    const high= (name) => {
        display("Hello  " + name);
    }
    return high 
}

let h1=low(printFormat1);
h1("Vaibhav");

function printFormat1(content){
console.log("******************")
console.log(content);
console.log("******************")
}

function printFormat2(content){
console.log("===================")
console.log(content);
console.log("===================")
}

function printFormat3(content){
console.log("++++++++++++++++++=")
console.log(content);
console.log("+++++++++++++++")
}