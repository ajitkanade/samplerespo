
function add(...param){

    let sum=0;
    for (let i=0;i<param.length;i++){
        sum=sum+param[i];

    }
    return sum;
}

let value1=add(10,20,30,40)
let value2=add(10,20,30);
let value3=add(10,20,30,40,50,60);

console.log(value1);
console.log(value2);
console.log(value3);