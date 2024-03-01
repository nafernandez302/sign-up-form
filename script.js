const confirmPassword = document.getElementById("confirm-password");


confirmPassword.addEventListener("input", (event) => {
    const password = document.getElementById("password");
    console.log(password.value, confirmPassword.value);
    if(password.value === confirmPassword.value){
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords don't match");
    }
});