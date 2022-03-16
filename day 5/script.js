//Do the below programs in anonymous function & IIFE
//1.Print odd numbers in an array

//a.anonymous function
 var arr=[1,2,3,4,5,6];
function OddNumber(arr){
let odds=arr.filter(n=>n%2)
console.log(odds)
};
OddNumber(arr);
//b.IIFE function
(()=>{
var arr1=[1,2,3,4,5,6]
let odds1=arr1.filter(n1=>n1%2)
console.log(odds1)
})();
//c.arrow function
var arr2=[1,2,3,4,5,6];
var OddNumber=(arr2)=>{
let odds=arr2.filter(n=>n%2)
console.log(odds)
};
OddNumber(arr2);
// 2.Convert all the strings to title caps in a string array

//a.anonymous function*/
var str='iron man'
function string(str){


 let s =str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(s);
  
};
string(str);

//b.IIFE function
(()=>{
var str1='iron man';
let string=str1.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
console.log(string);
})();

//c.Arrow function
var str2="iron man";
var capString=(str2)=>{
let s=str2.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
console.log(s);
};
capString(str2);
//3.Sum of all numbers in an array
//a.Anonymous function
var add = function(arr3) {
    return arr3.reduce((a, b) => a + b, 0);
};
 
var arr3 = [3, 6, 1, 5, 8];
 
var sum = add(arr3);
 console.log(sum);


//anonymous function
var arr4=[3,4,5,6,7];
function sumNumber(arr4){
let add=arr4.reduce((a,b)=>a+b,0);
console.log(add);};
sumNumber(arr4);


//IIFE function
(()=>{
  var arr5=[3,4,5,6,7];
  let sumNumber=arr5.reduce((a,b)=>a+b,0);
  console.log(sumNumber);
  })();
  
 //Arrow function 
  
  var arr6=[3,4,5,6,7];
  var add=(arr6)=>{
    let sumArray=arr6.reduce((a,b)=>a+b,0);
    console.log(sumArray);
  };
  add(arr6);
  
  
  
  
  
  //4.Return all the prime numbers in an array
//Anonymous Function:
var sum=isPrime(num);

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
};

console.log(sum);


//IIFE Function:
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
    return true;
});

//5.Return all the palindromes in an array

console.log(numArray);

