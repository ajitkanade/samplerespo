const prompt = require("prompt-sync")();

function zomato(coffeeType){
    console.log("Zomato : Welcome to Zomato app.");
    console.log("Zomato : We are placing your order for "+ coffeeType);
    const zomatoPromise = new Promise( (success, failure) => {
        setTimeout(
        () => {
          let yn = prompt("Do you want restaurant to found? Y/N ?");
          if(yn === "Y"){ 
            console.log("Zomato : We found 1 restaurant who can deliver ur coffee");
            success(coffeeType)
          }else{
            console.log("Zomato : No Restarant Found!");
            failure(coffeeType);
          }
        }
        ,2000)
    })
    return zomatoPromise;    
}

function resturant(coffeeType){
    console.log("Restaurant : Welcome to my Restaurant.");
    console.log("Restaurant : We are preparing your "+coffeeType);
    const restaurantPromise = new Promise( (success, failure) => {
            setTimeout( 
                () => {
                    console.log("Restaurant : Coffee is prepared!");
                    console.log("Restaurant : Packing done");
                    console.log("Restaurant : Waiting for rider to pick your coffee");
                    success(coffeeType);
                }
            ,5000);
    });
    return restaurantPromise;
}

function delivery(coffeeType){
    console.log("Delivery : Your order has been picked up from restaurant");
    console.log("Delivery : I am in on my way");
    const deliveryPromise = new Promise( (success, failure) =>{
        setTimeout(
        () => {
            const yn = prompt("MY Gate : Please approave my gate request?");    
            if(yn === "Y"){
                success("Delivery : Your Order has been delivered! Enjoy Your food")
            }else{
                failure("Delivery : I am not able to find your address. Apologies.")
            }
        }
        ,5000);
    });
    return deliveryPromise;
}


    zomato("Americano")
    .then( (foodType) => {
       return resturant(foodType);
    }).then( (foodType) => {
        return delivery(foodType);
    }).then((msg)=> {
        console.log(msg)
    }).catch((errmsg) => {
        console.log("Some issue in your order. Please visit again later " + errmsg);
    });