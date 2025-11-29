
let age=10;
let agegroup=age<=18 ? "child" : "Adult";
console.log(agegroup);

let username;
password="password";
let connectionstring=(username ?? "NA") + (password ? "NA");
console.log(connectionstring)

//optional chaining operator ?.
const person={
     name:"vaibhav",
     age:25;
     occupation:"Trainer",
     address :{
city: "Pune"

     }
}

console.log(person?.address?.city)