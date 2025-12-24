let complete=false;
let prom=new Promise(function(resolve,reject)
{
  if(complete){
    console.log("Promise is successful")
  }else{
    console.log("Promise is failed")
  } 
})

console.log(prom);