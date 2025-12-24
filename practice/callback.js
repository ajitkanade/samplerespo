function greet(name,callback){
 console.log("Hello "+ name)
 callback();
}

function callme(){
    console.log("This is callback function")
}

greet("AJIT",callme)
