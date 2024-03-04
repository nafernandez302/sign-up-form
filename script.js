const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirm-password");


confirmPassword.addEventListener("input", (event) => {
    const currentPassword = document.getElementById("password");
    if(currentPassword.value === confirmPassword.value){
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords don't match");
    }
});

password.addEventListener("input", (event) => {
    const currentConfirmPassword = document.getElementById("confirm-password");
    if(password.value === currentConfirmPassword.value){
        currentConfirmPassword.setCustomValidity("");
    } else {
        currentConfirmPassword.setCustomValidity("Passwords don't match");
    }
});