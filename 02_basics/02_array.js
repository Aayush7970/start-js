const marval=["spiderman","thor","innibinni"]
const darval=["spiderman","superman","batman"];
const newarray=marval.concat(darval)// it will return a new array
marval.push(darval);// it will push into the existing array
console.log(marval);

console.log(newarray)

const anotherarray=[...marval,...darval,...newarray];// it will concat all the array into a single one. it same as concat but it concate more than two array at once.

console.log(anotherarray);

const real_array=[1,23,3,4,[5,4,6,10],[2,4,[10,80,99]]]
const Flat_real_array=real_array.flat(Infinity);// it change the whole array into the 1D array if we pass inifinity as parameter
// bydefault it is 1;
console.log(Flat_real_array);

console.log(Array.isArray("Aayush"))// false;
console.log(Array.from("Aayush"))// print the array of Aayush
console.log(Array.from({name:"Aayush"}))// print the empty array because it can't decides by itself that for what(key/value) we need array
console.log(Array.of(100,200,300,400,500))// it maps all given numbers into a single array

// Object in javascript is similar to HashMap in java