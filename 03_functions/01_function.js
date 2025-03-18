function myfirstfun(){
    // console.log("A")
    // console.log("A")
    // console.log("Y")
    
}
console.log(typeof(myfirstfun))// reference so it will print undefined
console.log(typeof(myfirstfun()))// execution of myfirstfun and its type of function

// Adding two numbers with the help of function in javascript

function add(num1,num2){ // here num1 and num2 are parameters but not the arguments -> good to know this concept
    console.log(num1+num2)
}
const p=add(5,3); // here 5 and 3 are arguments but not the parameters
console.log(`Without return : ${p}`)

function addtwonumbers(num1,num2){
    return num1+num2;
}
const ans=addtwonumbers(5,10);
console.log(`After return ${ans}`);


function user(Username='username not provided'){ // this will work when we pass nothing as an argument
    if(!Username){
        console.log("Please provide username")
        return
    }
    return `${Username} welcome bro`
}

console.log(user("Aayush"))
console.log(user());

function addmany(...num1){
    return num1
}
console.log(addmany(5,10,50))

