// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

// addTwoNumbers(2,5)

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumbers(3,5)
console.log(result);

function loginUserMessage(username="sam //default value"){
    if(username===undefined || !username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// const message=loginUserMessage("hitesh")
// console.log(message)
console.log(loginUserMessage())


//ecommerce situation
//rest operator
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"hitesh",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)

// handleobject({
//     username:"hitesh",
//     price:199
// })

const myNewArray=[200,400,100,600]
function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
// console.log(returnSecondvalue([200,400,100,600]))