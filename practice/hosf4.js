
function calculatesum(a,b,PrintMe){
    let c=a+b;
    PrintMe(c);
}

function PrintFormat1(txt){
    console.log("====================");
    console.log(txt);
    console.log("====================");
}

function PrintFormat2(txt){
    console.log("*****************");
    console.log(txt);
    console.log("******************");
}


calculatesum(10,20,PrintFormat1)
calculatesum(100,200,PrintFormat2)