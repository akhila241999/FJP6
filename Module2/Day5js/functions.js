function sayhello()
{
    console.log("hello from function");
}

sayhello();

function sum(n1,n2)
{
    let addition = n1+n2;
    console.log(addition);
}

sum(3,5);

function multiply(n1,n2)
{
    return n1*n2;
}
console.log(multiply(3,5));


let a = function sub(n1,n2){return n1-n2;}
console.log(a(5,3));

// IIFE - Imediately invoked function expression.

(function(){
    console.log("hello from IIFE");
})();


(function(n1,n2){
    console.log(n1/n2);
})(10,5);