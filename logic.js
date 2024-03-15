//selctor

let upper =document.getElementById("check-Uppercase");
let lower =document.getElementById("check-lowercase");
let DocNumber =document.getElementById("check-number");
let DocSymbol =document.getElementById("check-symbol");
let size =document.querySelector(".length");

//all charecter

let upperCase = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
let lowerCase ="abcdefghijklmnopqrstuvwxyz";
let number ="1234567890";
let symbol = "\"`!@#$%^&*()-=+_\|';:.>,<?/~"

//for a random word
function random(a){
    return a[Math.floor(Math.random() * a.length)]
}


function generateaPss(password=""){
 if(upper.checked){
    password += random(upperCase)
 }
 if(lower.checked){
    password += random(lowerCase)
 }
 if(DocNumber.checked){
    password += random(number)
 }
 if(DocSymbol.checked){
    password += random(symbol)
 }else{
   document.getElementById("pass-box").innerText ="please select something"
 }
 // recursion the  function 
 if(password.length<size.value){
    return generateaPss(password)
 }
 let finalPass =slice1(password,size.value)


 document.getElementById("pass-box").innerText =finalPass
}
 
document.getElementById("btn").addEventListener("click",function(){
generateaPss()
})


function slice1(str,num){
return str.length > num ?`${str.slice(0,num)}`:str  ;
}

