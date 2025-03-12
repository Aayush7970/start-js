// // Arrays

const arr=[1,2,3,4,5,6];
// const arrstr=["aayush","ranjan","abhay"];
// const arr2=new Array(1,2,3,4);
// console.log(typeof(Array()));
// console.log(arr[0]);

// //Array methods
//     arr.push(15);
//     console.log(arr);
//     arr.pop();
//     console.log(arr);
//     arr.unshift("start");
//     console.log(arr);
//     arr.push(1);
//     console.log(arr);
//     console.log(arr.indexOf(1)); // return the index of first occuring 1 in the array arr;
//     console.log(arr.includes('start')); // if present then return true or false;
    
    
    // conversion of an array to string:-

    // const str=arr.join(); // str is string of the elements in the arr
    // console.log(`${str} and its type is ${typeof(str)}`);
    console.log("Pre myn1 : "+arr);
    const myn1=arr.slice(1,3);
    console.log(myn1);

    console.log(`Post myn1 : ${arr}`);

    const myn2=arr.splice(1,3);// splice cut the given range from the original array.

    console.log(myn2);

    console.log(`Post myn2 : ${arr}`);
    
    