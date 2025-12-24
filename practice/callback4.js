function myFirst(name,callback) {
  console.log(`Hello ${name}`);
  callback();
}

function mySecond() {
  console.log("Goodbye");
}


myFirst("Ajit",mySecond);

