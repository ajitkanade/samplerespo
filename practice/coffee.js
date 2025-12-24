function zomato(coffeeType,callback){
    console.log("Welcome to zomato app");
    console.log("we are placing order  for" + coffeeType);
    setTimeout(
        function(){
            console.log("We found one restaurant");
            callback();
        }
          ,5000)
            }
        function restaurant(){
            console.log("preaparing coffee");
        }

        zomato("Americano",restaurant);
    