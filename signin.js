var email= document.getElementById('email');
var pass = document.getElementById('pass');
var  names = document.getElementById('name');



function signin(){

    if(names.value==""){
        alert("Enter your Name ")
    }else{
        var a = localStorage.getItem(names.value);
        var email1= JSON.parse(a).email;
        var password1 = JSON.parse(a).pass;
        if(email.value=="" || pass.value==""){
          alert("fill input")
      }else if(email.value==email1 && pass.value==password1){
          window.location.href="login.html"
       
      }else if (email.value==email1 && pass.value!==password1){
          alert("wronge password")
      }else if (email.value!==email1 && pass.value==password1){
          alert("wronge email")
      }else if (email.value!==email1 && pass.value!==password1){
         alert("Email and password both are wronge")
      }
    }
    
   

}