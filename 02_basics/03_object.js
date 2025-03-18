//object
const mySum=Symbol('concept');
const myUser={
    "full name": "Aayush Ranjan",// we can't access it through .(dot)
    [mySum]:'unique',// for symbol use square bracket
    name: "Aayush",
    roll: 2210991137,
    email: "aayush@gmail.com",
    mob: 7970785149
}
console.log(myUser.name)// . way to access 
console.log(myUser['name'])// indexing way to access 
console.log(myUser['full name'])
console.log(typeof(myUser[mySum]));
console.log(typeof(mySum));

Object.freeze(myUser);
myUser.email="ranjan@gmail.com";// it can't change the email of myUser because myUser is already freezed
console.log(myUser)

//make function under object
const myUser2={
    name: "same",
}
myUser2.greeting=function(){
    console.log(`Hello ${this.name}, Hope u r fine`)
}
console.log(myUser2.greeting)// it passing the function reference
console.log(myUser2.greeting()) // 