
let prom=new Promise((resolve,reject) =>{

    let number=3;

    if(number%2===0){

        resolve("Promise is successful")

    }else

        reject("Promise is failed")
})

prom
 .then((message) => {(console.log(message))})
 .catch((error) => {console.log(error)})

