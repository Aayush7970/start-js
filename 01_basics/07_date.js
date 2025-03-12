//Date 
let mydate=new Date();
console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toLocaleString());
let mdate=new Date(2025,0,5);
console.log(mdate.toDateString());
let createmydate=new Date("01-05-2003");
console.log(`My Birth date is on ${createmydate.toDateString()}`);
console.log(createmydate.getTime());// this timestamp is in millisecond;
console.log(Math.floor(Date.now()/1000));// this timestamp is in second;
console.log(Math.ceil(25.1));//26
let m=new Date();
console.log(typeof(Date));
mydate.toLocaleString('default',{
    weekday:"long",
})