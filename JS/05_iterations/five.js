//for each it performs a given function on each item in an array
const coding=["js","ruby","java","python","cpp"]

//array has foreach property

// coding.forEach(function (val){
// console.log(val);
// })

// coding.forEach((item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
console.log(item.languageName);
})
//Remember, the forEach method does not return a new array or modify the original array. It simply executes a function for each item in the array.


