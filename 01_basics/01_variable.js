const accountId=2210991137
let accountEmail="aayush@gmail.com";
var accountPassword="aayush";
accountCity="Kurhani";
let accountState // it is undefined

// accountId=1137 --> error because it is constant
accountEmail="aayush7970@gmail.com";
accountPassword="Changed";
accountCity="Muzaffarpur"
/*
Prefer not to use var
because of issue in block scope and functional scope
and also prefer not to use dafalut variable
*/
accountI=1;
console.log(typeof(accountI));
console.log("accountId")
//console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

{
    let j=20; // it is always accessed inside the block
    var i=31; // it is accessed inside and outside the block
    console.log(i);
    const k=50; // it is always accessed inside the block
}
console.log(k);