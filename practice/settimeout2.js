function f1(){

    console.log("coffee preparing")
}

function f2(){

    console.log("serving coffee")
}

function f3(){

    setTimeout(f2,5000)
    

}

f1()
f3()
