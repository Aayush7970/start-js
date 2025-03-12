let score=33

console.log(typeof(score))

let score2="33"
let score3="33aa";
let valnum=Number(score2);
let valnum2=Number(score3)
console.table([valnum,typeof valnum]) // 33
console.table([valnum2,typeof(valnum2)])

let check=null
console.table([Number(check),typeof(Number(check))])  //null is converted to 0 when conversion to number.

/*
"33" => 33
"33a" => NaN and type is number
true => 1 & false => 0
1 => true & 0=> false
"aat" => true & ""=> false
33 => "33"
*/

//**********************************************Operatons***************************************************//
let value=10/3.0;
let ans=-value;
console.log(ans);
console.log(typeof(value))

//console.log(2**8) -> 2 to the power of 8

console.log(2+2+"1"+2+2)

// +true = 1 & +"" = 0 & -true = -1 & -false = -0
console.log(-false)
let num1,num2,num3
num1=num2=num3=2+2
// an equality check == and comparision check >,<,<=,>= works differently.
console.log(null==0);
console.log(null>0);
console.log(null>=0); 
// in comparision null first changes to 0 and then compare by any number.
/*
console.log(undefined==0) -> false
console.log(undefined>0) -> false
console.log(undefined<0) -> false
console.log(undefined>0) -> false
console.log(undefined<=0) -> false
*/
console.log("2"===2)
