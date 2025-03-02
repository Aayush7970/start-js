let name="Aayush"
let repoCount=10
//console.log(2+3+name+repoCount+2+3+"ok") -> this is old method
//new method :-
console.log(`Hello my name is ${name} and my total repoCounts are ${repoCount} and its type is ${typeof(repoCount)}`) 

const getName=new String("Aayush"); // this is a prototype
// console.log(getName)
// console.log(getName[0]);
// console.log(getName.__proto__);
// console.log(getName.length)
// console.log(getName.toUpperCase());
// console.log(getName.charAt(2));
// console.log(getName.indexOf('a'));
// console.log(getName.substring(0,4));//-> even we provide -ve value then also it start with 0;
// console.log(getName.slice(-5,4));//-> -ve index started from back;
const getspace="  aayush  ";
console.log(getspace.trimEnd());
console.log(getspace.replace("aa","Aa"));// it will not replace in the original string because of immutibility
console.log(getspace.includes("aa"))// it check that the given string is present in the original string or not.