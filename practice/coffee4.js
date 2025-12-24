function zomato(coffeeType,callback){
    console.log("welcome to zomato");
    console.log("we are placing order for " + coffeeType)
setTimeout( 
   function(){
    console.log("we are searching restaurant for you")
    callback();
   }
    ,2000)
}

function restaurant(){

    console.log("we are preparing your coffee")
}
 zomato("Americano",restaurant)