
function Mydisplay(sum){

console.log("this is addition programe " + sum)

}

function Mycalculator(num1,num2,mycallback)
{
    let sum=num1+num2;
    mycallback(sum)

}

Mycalculator(5,5,Mydisplay)
