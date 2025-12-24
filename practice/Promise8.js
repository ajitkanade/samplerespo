
function prom(complete){

  return new Promise(function(resolve,reject){

  if(complete){
    resolve("This promise is passed")

  }else{
   reject("This promise is failed")
  }
})
}
prom(false)
.then((result)=>{
  console.log(result)
})
.catch((error) => {
  console.log(error)
})


