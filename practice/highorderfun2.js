function multipler (x){

    return function(y){
      return x*y;
}}

let doubleFunction=multipler(2);
let multiplyBy5=multipler(5);

console.log(doubleFunction (5));
console.log(multiplyBy5(20))
