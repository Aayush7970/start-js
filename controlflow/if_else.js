const userEmail="aayush.google.com" //string.length>0 => true
if(userEmail) console.log(userEmail)
else console.log("Empty email entered")

const check="" // Empty string is treated as false
if(check) console.log("valid check")
else console.log("empty check")

const arrcheck=[0]
if(arrcheck) console.log("array is treated as true")
else console.log("false")

// false, 0, -0, BigInt, 0n, "", null, undefined, Nan -> all are false

// Truthy values
// "0", 'false', " ", [], {}, function(){}

// Checking that an array is empty or not:-
const emptyarr=[]
if(emptyarr.length===0) console.log("Array is empty")

// Checking that an obj is empty or not:-
const emptyobj={}
if(Object.keys(emptyobj).length===0) console.log("emptyobj is empty")

// false == 0, false=="", 0=="" -> all are true

//Nullish Coalescing Operator (??):     null undefined

let val1;
val1=null ?? 0; // Nullish Coalescing Operator is used to handle the illegal/null/undefined content
console.log(val1)
val1=null ?? null ?? 10;
console.log(val1)

// Ternary Operator : condition ? True : False

// do While :-
// This type of loop run the statement atleast once even the given condition is false;

let score=1;
do{
    console.log(score)
    score=score+2;
}while(score>=10); 

// forof loop

const arr=[1,2,3,4,55]
for(const num of arr){
    console.log(num)
}

const str="HeeloAayush"
for(const s of str){
    console.log(s)
}

// Map

const map=new Map()
map.set('In','India')
map.set('Aus','Australia')
map.set('Pak','Pakistan')
map.set('Hindu','India')
// console.log(map)

// Iteration in Map:-
for(const p of map){
    // console.log(p) // it prints each key-value pair in the array format
}

// Iteration in Map :-
for(const [key,value] of map){
    console.log(key,':',value)
}

//Iteration in Object:-

const obj={
    name:"Aayush",
    vill:"Kurhani",
    Dist:"Muzaffarpur",
}
// We can't iteratre through forof loop in obj so, we have to use the forin loop

for(const key in obj){
    console.log(`${key} : ${obj[key]}`)
}

// But we can't iterate in map through forin loop
for(const [key,value] in map){
    console.log(key,':',value)   // no any output will be printed   
}