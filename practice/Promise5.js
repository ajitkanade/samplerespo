
let prom= new Promise ((resolve,reject) =>{
let success=false;

if(success){

    return resolve(" this promise is fullfilled")
}else{
    return reject (" Promise is rejected")
}
}
)

prom
 .then( (msg) => 
    {
        console.log("I am inside then" + msg)
    })
 .catch ( (msg) =>
     {
        console.log("I am inside catch" + msg)
    })
 .finally ( () =>
     {
        console.log("I am always executing")
     })