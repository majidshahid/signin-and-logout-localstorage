
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var names = document.getElementById('name')


function md() {
    if (email.value == "" || pass.value == "" || names.value == "") {
        alert("fill input")
    } else {
        function user(email, pass) {

            this.email = email;
            this.pass = pass;

        }
        var mm = new user(email.value, pass.value)

        localStorage.setItem(names.value, JSON.stringify(mm))
           window.location.href='index1.html'
    }

}


