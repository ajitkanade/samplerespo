
let n=[11,22,33,44,55,66,77,88,99]
console.log(n);
let a=n.slice(3,8)
console.log(a)
let b=n.slice(5)
console.log(b)

let c=n.splice(3,4);
console.log(c)
let d=n.splice(3,2,23,24)
console.log(n)
let e=n.splice(5,0,777)
console.log(n)