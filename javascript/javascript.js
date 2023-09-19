var password = document.getElementById('pass');
var confirmPass = document.getElementById('confirmPass');

function validatePassword() {
    if(password.value != confirmPass.value) {
        confirmPass.setCustomValidity("Password does not match");
    } else {
        confirmPass.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirmPass.onkeyup = validatePassword