
let p1= new Promise ((a,b) =>{

    let k=true
    if(k)
    {
        return a("Promise is successful")

    }else{

        return b("Promise is unsuccessful")

    }
    }
)
    p1
    .then((msg) => {console.log("I am in then block " + msg)})
    .catch((msg) => {console.log("I am in catch block " + msg)})
    .finally((msg) =>{console.log("I am in finally block")})





