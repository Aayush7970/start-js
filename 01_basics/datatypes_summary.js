const first=Symbol('123')
const second=Symbol('123')
console.log(first==second)
const bigNumber=25641651065100850805400n
console.log(typeof bigNumber)
// Primitive Datatype : 7 -> number, string, boolean, null, undefined, symbol, bigint
// Non Primitive Datatype : Array, Objects, Functions.
let array=["Aayush","Ranjan","more"];
let myobj={
    num: 5,
    name:"Aayush",
}
let myfunction =function(){
    console.log("Hello world!");
}
console.log(typeof second)

//Stack (Primitive) and Heap (Non-Primitive)
let mystack="Aayush";
let copystack=mystack; // this one is by value;
copystack="Ranjan";
console.log(mystack)
console.log(copystack);

//object -> Non-Primitive -> Heap
let userone={
    email:"aayush@gmail.com",
    name:"Aayush"
}
let usertwo=userone; // this one is by referance;
usertwo.email="ranjan@gmail.com";
console.log(usertwo)
console.log(userone)