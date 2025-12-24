
const p1=new Promise((success,failure) =>{

    const i=5;
    if (i==7){
        success("one restaurant found");
    }else{
            failure("No restaurant available")
        }
         });

p1
 .then ((msg) => {

    console.log("Success found :" + msg);
 }).catch( (msg) => {
    console.log("some issue : " + msg);
 }).finally(() => {
    console.log("I ll always execute")
 })


