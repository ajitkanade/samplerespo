
let p1=new Promise((a,b) =>{
    let k=true
    if(k){
     return a("this promise is passed")

    }else{
     return b("this promise is passed")
    }
})
    p1
    .then((msg) =>{

        console.log("we are in then " + msg)
    })
    .catch((msg) => {
     console.log("we are in catch " + msg)
    })






})