//var let and const
var c=300
let a=300
if(true){
    let a=10
    const b=20
    c=30;
    console.log("inner",a)
}
console.log(a);
// console.log(b);
console.log(c);


//closure
function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube "
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++interesting+++++
// console.log(addone(5)) hoisting
function addone(num){
    return num+1
}

//function expression
// addTwo(5)---->error
const addTwo=function(num){
    return num+2
}