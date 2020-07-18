function inchToFeet(inch){

  var feet = inch/12;
  return feet;  
}var mamaFeet = inchToFeet(156);


console.log(mamaFeet);
var mamiFeet = inchToFeet(288);
console.log(mamiFeet);

function feetToInch(feet){

var inch = feet *12;
return inch;

}var khalaInch = feetToInch(7);
console.log(khalaInch);



function factorial(n){
    var factorial = 1;
for(var i = 1; i <= n; i++){
    factorial = factorial * i;}
    return factorial;}



var result = factorial(4);
console.log(result);










function factorial(n){

var i = 1;
var factorial = 1;
while(i <= n) { factorial = factorial * i;
    i++;}
return factorial;
}
var result = factorial(10);
console.log(result);



function factorial(n) {
    if (n == 0) {

        return 1;
    }else{
        return n * factorial(n-1);}
    }    
var result = factorial(2);
console.log(result);


// function fibonacci(n){
// var fibo = [0, 1];

// for(var i = 2; i <= 12; i++){

// fibo[i] = fibo[i-1] + fibo[i-2];
// }return fibo;}

// var result = fibonacci(12);
// console.log(result);





// function fibonacci(n){
//     if(n == 0){

//         return 0;
//     }if(n == 1){
//         return 1;
//     }
// else{
//     return fibonacci(n-1) +  fibonacci(n-2);}
// }
// var result = fibonacci(10);
// console.log(result);









function fibonacci(n){
    if(n == 0){

        return [0];
    }else if (n == 1){
        return[0, 1];
    }
else {var fibo = fibonacci(n - 1);
    var nextElement = fibo[n - 1] + fibo[n - 2];

fibo.push(nextElement);
    return fibo;}
}
var result = fibonacci(10);
console.log(result);
























