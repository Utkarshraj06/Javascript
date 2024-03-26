//Immediately invoked Function Expression

//to get rid of global scope pollution
(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`DB Connected TWO ${name}`);
})('hitesh')