var c=100

if(true){
    const a=10;
    let b=20;
    var c=30;
    var d=40;
}
// console.log(a)
// console.log(b)
console.log(d)
console.log(c)  // this error due to var

//different types of making function in javascript

// Type 1
addnumber(5,3) // No error it successfully called and return the output
// it is hosting
function addnumber(num1,num2){
    return num1+num2
}

// Type 2
addnumber2(5,3); // it shows error because addnumber2 is a variable which contains the reference of function and it can't be pre called before intialization
const addnumber2=function(num1,num2){
    return num1+num2;
}

