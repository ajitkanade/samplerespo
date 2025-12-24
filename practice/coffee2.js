
function zomato(coffeeType,callback){
 console.log("waiting for zomato app");
 console.log("checking for the restaurant" + coffeeType)
 setTimeout(
    function(){
        console.log("we found one restaurant")
        callback();
     }
     , 2000);
    }
     function restaurant(){
        console.log("preparing coffee");
             }

  zomato("Americano",restaurant);