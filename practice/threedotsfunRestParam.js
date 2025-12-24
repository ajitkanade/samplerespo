function sum(...param){
    let add=0;

    for(let i=0;i<param.length;i++){
    
        add=add+param[i];
    }
        return add;
}

let value1=sum(10,20,30);
let value2=sum(10,20,30,40);
let value3=sum(10,20,30,40,50);

console.log(value1);
console.log(value2);
console.log(value3);