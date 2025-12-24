
function printTable(x){
    
    for (let i=1;i<=10;i++){
      console.log(x*i);
    }
}
function showTable(a,n,func){
for( let j=a;j<=n;j++){

    console.log("Printing table for  " + j)
     func(j);
}
}
showTable(9,11,printTable)