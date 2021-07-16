var a = localStorage.getItem();
var email1= JSON.parse(a).email;
var password1 = JSON.parse(a).pass;
console.log(email1)
var email=document.getElementById('email');
email.innerHTML="Email  = "+email1;
var password=document.getElementById("password");
password.innerHTML="password  = "+password1
// document.getElementById(password).innerHTML= password1; 

function del(){
    localStorage.removeItem('user')
    window.location.href='index.html'
    
}