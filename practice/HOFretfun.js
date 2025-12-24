
function getdata(){

    return function(){

        console.log("This is return function");
     }
    }
      let func=getdata();
      func();
