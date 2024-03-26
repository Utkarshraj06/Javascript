const user ={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);//{}
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();
// console.log(this);

//so here this is refer to the current context

function Chai(){
    let username="hitesh"
    console.log(this.username);//undefined
}

// Chai()

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);//undefined
// }
// chai();

// const chai=() =>{
//     let username="hitesh"
//     console.log(this);//{}
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2) => num1+num2

// const addTwo=(num1,num2) => (num1+num2) //() work as a return

// const addTwo=(num1,num2) => ({username:"hitesh"})
// console.log(addTwo(3,4));




