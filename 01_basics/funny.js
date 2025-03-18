// this one is preety funny code it just printing the value based on timeout according to the element

const arr=[5,2,7,1,6000,9,3,4]
function sort(arr){
    for(let i=0;i<arr.length;i++){
        setTimeout(()=> console.log(arr[i]),arr[i])
    }
}
sort(arr)

// this one is preety funny code it just checking that the given number is even or not ?
function isEven(num){
    let check=true;
    for(let i=1;i<=num;i++){
        check=!check
    }
    return check;
}
console.log(isEven(9))