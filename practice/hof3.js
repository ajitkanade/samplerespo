
function sum(a,b,m1){

 let c=a+b;
  m1(c);
  return c;
}

function sum1(x){
   console.log("***" + x)
}
 const n=sum (4,5,sum1);
console.log(n);

function calsum(a,b,f)
{
    let c=a+b;
     f(c);
    return c;
}
function print1(txt)
{
    console.log("===============================")
    console.log(txt);
    console.log("===============================")
}

const m = calsum(10,20,print1);
console.log(m);