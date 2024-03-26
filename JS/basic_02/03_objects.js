//obj literals

const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    age:18,
    [mySym]:"mykey",
    "full name": "hitesh dwidedi",
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(typeof JsUser[mySym]);string
// console.log(JsUser["full name"])

JsUser.email="hitsh@chatgpt.com"
Object.freeze(JsUser);//value will not propogate
JsUser.email="hitsh@chrome.com"
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greeting2=function(){
    console.log(`Hello Js user ${this.name}`);
}
//console.log(JsUser.greeting());
// console.log(JsUser.greeting2());