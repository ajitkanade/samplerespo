
function click(elmId){
    let p1 = new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(elmId.includes("pass")){
                return resolve(elmId + " is clicked");
            }else{
                return reject(elmId + " is not found. so click not possible");
            }
        } ,2000);
    });
    return p1;
}
function enterData(elmId){
    let p1 = new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(elmId.includes("pass")){
                return resolve(elmId + " data entered");
            }else{
                return reject(elmId + " is not found. so data is not entered.");
            }
        } ,1000);
    });
    return p1;
}

/*
    Step 1 - click on "elem_pass" element
    Step 2 - Enter data in "elem_pass" element
    Step 3 - click on "elem2_pass" element
    Step 4 - click on "elem3_pass" element
    Step 2 - Enter data in "elem5_pass" element
*/


async function testcase1(){
    try{
        await click("elem_pass");
        await enterData("elem_fail");
        await click("elem2_pass");
        await click("elem3_pass");
        await enterData("elem5_pass");
    }catch(err){
        console.log("Testcase failed " + err);
    }
}
testcase1();

// await - return promise
// await only works with async

click("elem_pass").then( (msg) => {
    console.log(msg);
    return enterData("elem_pass");
}).then( (msg) => {
    console.log(msg);
    return click("elem2_fail");
}).then((msg) => {
    console.log(msg);
    return click("elem3_pass")
}).then((msg) => {
    console.log(msg);
    return enterData("elem5_pass")
}).then( (msg) => {
        console.log(msg);
}).catch( (msg) => {
    console.log("Testcase failed " + msg);
});