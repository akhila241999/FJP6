let arr=[];
console.log(arr);

let elearr=[1,2,4,5,"hello i am string", false, 'c',4.5];
console.log(elearr);

console.log("eement at 4th index:"+elearr[4]);
console.log("element at 0th index:"+elearr[0]);
elearr[3]="nothing";
console.log(elearr);

// ###########################
// array methods
//push

elearr.push("new item");
console.log(elearr);

// pop

elearr.pop();
console.log(elearr);

// shift()

elearr.shift();
console.log(elearr);

// unshift

elearr.unshift("newly added item");
console.log(elearr);

// length attribute of array

console.log(elearr.length);
console.log(arr.length);