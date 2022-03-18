let obj={};
console.log(obj);

let objRiya = {
    name : "Riya agarwal",
    age:45,
    phoneno : 8888888888,
};
console.log(objRiya);


let capAmerica = {
    name : "steve",
    age: 9999,
    friends:["natasha","thor","tony","bucky","bruce"],
    address:{
        city : "queens",
        state : "haryana",
    },
    sayHi:function(){
        console.log("cap America says Hi");
    }
}
console.log(capAmerica);

console.log(capAmerica.name);
console.log(capAmerica.age);
console.log(capAmerica.friends);
console.log(capAmerica.friends[3]);
console.log(capAmerica.address);
console.log(capAmerica.address.city);
capAmerica.sayHi();

capAmerica.Movies=["Avenger","civil war","endgame"];

console.log(capAmerica);

delete capAmerica.Movies;

// console.log(capAmerica);

// capAmerica.Age=1000;
// delete capAmerica.Age
console.log(capAmerica);


console.log(capAmerica['name']);

console.log(capAmerica['address']['state']);
// let a =10;
// console.log("priniting value",a);