const score=400;
console.log(score)

const balance=100;
console.log(balance.toString().length)
console.log(balance.toFixed(3));
const decimal=128.98;
console.log(decimal.toPrecision(4));
const hundred=1000000;
console.log(hundred.toLocaleString());// it gives the us based number;
console.log(hundred.toLocaleString('en-in'))// it gives the number based on indian number system

//+++++++++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Math.min(a,b)
Math.max(a,b)
Math.round(4.2)->4
Math.ceil(4.2)->5
Math.floor(4.9)->4
*/
console.log(Math.random())//it always generates value between 0 and 1
console.log(Math.round(Math.random()*10)+1)
const min=20;
const max=100;
console.log(Math.round(Math.random()*(max-min+1))+min);// it gives value between min and max
