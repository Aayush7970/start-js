// const user={
//     username:"Aayush",
//     price:999,
//     welcomemessage:function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)// this gives all the content of the website.
//     }
// }
// user.welcomemessage;//it doesn't call the welcomemessage function
// user.welcomemessage()
// user.username="Changed"
// user.welcomemessage()
// console.log(this)// their is no any content in this node environment

// function u(){
//     let use="Aayush"
//     console.log(this.use)// this prints undefined
//     console.log(use) // this prints Aayush
//     user1:"Aa"
//     console.log(this.user1)// this prints undefined but only user1 gives error  
//    // console.log(this) // too many content in this
// }
// u()

// const fun=()=>{
//     let e='x'
//     console.log(e) // this will print the content stored in e;
//     console.log(this.e) // this will print undefined
//     console.log(this)// this will print an empty object
// }

// fun()
// const f=function(){
//     console.log(this) // this will print the whole content
// }
// f()
// function fu(){
//     console.log(this) // this the print the whole content
// }
// fu()

// const addTwo=function(num1,num2){
//     return num1+num2;
// }
// same
// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
//same
// const addTwo =(num1,num2)=> num1+num2 // it return num1+num2

//same
const addTwo = (num1,num2) => (num1+num2) // it return num1+num2

const objret=(num1,num2)=> ({username:"Aayush"}) // returning of object using array function 
console.log(objret(2,3))
