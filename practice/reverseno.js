
let num=267;

let rev=0;

let rem=num % 10; // 7
num=Math.floor(num/10); // 26. num=26
rev=rev*10+rem; // rev=7

rem=num % 10; // 6
num=Math.floor(num/10); // 2. number=2
rev=rev * 10+ rem; // num=76

rem=num % 10;  // 2
num=Math.floor(num/10)// 0, num =0
rev=rev * 10 +rem //rev=762

console.log(rev);


