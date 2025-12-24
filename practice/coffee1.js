
function zomato(coffeetype,callback){
  console.log("request for coffee 1111" + coffeetype)
  callback();

}

function restauant(callback){

    console.log("coffee ready 2222")
}

zomato("Coppuchino",restauant)

