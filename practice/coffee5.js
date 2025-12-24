
 zomato("Americano",restaurant,delivery)

function zomato(coffeetype,callback,callback1){

    console.log("Zomato:Welcome to zomato app");
    console.log("zomato: we are pacing order for" + coffeetype)

    setTimeout(()=> {
        console.log("Zomato:we found 1 restaurant who can deliver coffee")
        callback(coffeetype,callback1)
       }
       ,2000)
    }

    function restaurant(coffeetype,callback){
        console.log("Restaurant:Welcome to restaurant");
        console.log("we are preparing your coffee " + coffeetype)

        setTimeout(
            () => {
                console.log("Restaurant:Coffee is prepared")
                console.log("packing done")
                console.log("waiting for rider")
                callback();
            
        }, 2000);
    }

    function delivery(){
        console.log("deleiverry:your order is picked up from restauant");
        console.log("coffeee is on the way")

        setTimeout(() => {
            console.log("Enjoy your coffee")
            
        }, 5000);
    }
   
        
    

        
   
    