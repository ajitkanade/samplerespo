
function f1(){

    console.log("F1 function")
}

function f2(){
    console.log("F2 function")
}

function f3(){

    setTimeout(f2,10000)
}
f3();
f1();