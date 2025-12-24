function zomato(coffeeType,callback,callback1){
    console.log("AAAAAAA");
    console.log("BBBBBBB" + coffeeType)

    setTimeout(() => {

        console.log("CCCCCCCC")
        callback(coffeeType,callback1)
        
    }, 2000);
}

function restauant(coffeeType,callback){

    console.log("DDDDDD");
    console.log("EEEE" + coffeeType)

    setTimeout(() => {
        console.log("FFFFFFF");
        callback();
        
    }, 3000);
}

function delivery(){
    console.log("GGGGG")
    console.log("HHHHH")

    setTimeout(() => {
        console.log("IIIIIII")
        console.log("JJJJJJJ")
        
    }, 3000);
}

zomato("coppucino",restauant,delivery)