// singleton Object
const singobj=new Object();//this is singleton object
singobj.name="Aayush"
singobj.type="Student"

const nonsigobj={
    // this is not a singleton object
    name:"Aayush",
    fullname:{
        username:{
            firstname:"Aayush",
            lastname:"Ranjan",
        },
        roll:2210991137,
    }
}
console.log(nonsigobj.fullnam?.username)// ? is used because if fullnam is not in the nonsigobj then return undefined instead of an error

//const obj={obj1,obj2}

const dupobj=Object.assign(singobj,nonsigobj) // in this nonsigobj is copied in singobj and singobj reference is in dupobj,
// Hence dupobj is same as singobj therefore we prefer the syntax like : Object.assign({},obj1,obj2..);
dupobj.name="Aayush Ranjan"
console.log(dupobj)
console.log(singobj)

const spreadobj={...nonsigobj,...singobj}
console.log(spreadobj)

// Object in javascript is similar to HashMap in java

console.log(Object.keys(dupobj))
console.log(Object.values(dupobj))
console.log(Object.entries(dupobj))

console.log(dupobj.hasOwnProperty('name')) // hasOwnProperty checks that the given key is present in the object or not



// Destructuring of object

const course={
    coursename:"Javascript",
    tutor: "Hitesh",
    student: "Aayush",
    status: "Enrolled"
}
const {coursename : whichcourse} =course // from course we rename the course.coursename as whichcourse by which we can directly use this.
// Basically we are destructuring the course.coursename as whichcourse
console.log(whichcourse)

// json format :-

// {
//    ....
//    ....
//    ....
// }

// [
//     {}
//     {}
//     {}
//     {}
// ]