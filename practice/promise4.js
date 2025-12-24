let p1=new Promise ((resolve,reject) =>  {
 let success = true;

 if (success){

   return resolve("this promise is fulfilled")
 }else{
 
    return reject("promise is rejected")

 }
}
)

p1  
 .then( (msg) => {console.log("i am inside then: " + msg)})
 .catch( (msg) => {console.log("i am inside catch: " + msg)})
 .finally( () => {
    console.log("I am always executing")
 })



