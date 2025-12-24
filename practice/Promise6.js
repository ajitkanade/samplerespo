let complete=false;
let prom=new Promise(function(resolve,reject)
{
  if(complete){
    console.log("Promise is successful")
  }else{
    console.log("Promise is failed")
  }
})

prom
.then ((msg)=>
{
console.log("I am inside then " + msg)
})
.catch((msg) =>
{
console.log("I am inside catch" + msg)
})

