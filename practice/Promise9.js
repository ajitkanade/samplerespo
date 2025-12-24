
function f1(){

    let p1=new Promise((a,b) => {
    let k=true
    if(k){
       return a("Order is successful");
    }else{
        return b("order is failed");
    }

});
return p1;
}
function f2(){

    let p1=new Promise((a,b) => {
    let k=true
    if(k){
       return a("Order is successful");
    }else{
        return b("order is failed");
    }

});
return p1;
}
   /* f1()
    .then((msg) => {
            console.log("I am inside then" + msg)
            return f2();
        })
    .then((msg) => {
        console.log("I am inside f2 then")
    }
)
    .catch((msg) => {console.log("I am inside then " + msg)})
    */

    async function asy() {
        try{
            await f1();
            await f2();         
        }catch(error){
            console.log(error);
        }
    }
    asy();




    