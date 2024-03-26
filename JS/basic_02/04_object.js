//singelton

const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
//spread operator
const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {id:1,
    email:"asdas@gad.com"
    },
    {
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//object destructure
const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
//or
const {courseInstructor:Instructor}=course
//console.log(courseInstructor);
//console.log(Instructor);

const navbar= ({company}) =>{

}
navbar(company = "hitesh")


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price" : "free"

// } Json Api comes in the form of object or array

// [
//     {},
//     {},
//     {}
// ]
