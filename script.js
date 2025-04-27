document.getElementById("Form").addEventListener("submit", function(event){
    event.preventDefault(); //Prevent form submission

    let isValid = true;

    //Email validation
    let email = document.getElementById("email").ariaValueMax;
    let emailError = document.getElementById("emailError");
    if(!/^\S+@\S+\.\S+$/.test(email)){
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent ="";
    }

    //Password Validation (Min 8 chars, 1 Uppercase, 1 number)
    let password = document.getElementById("password").value ;
    let passwordError = document.getElementById("passwordError");
    if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
        passwordError.textContent = "Password must be at least 8 chars, 1 uppercase, number";
        isValid = false;
    } else {
        passwordError.textContent= "";
    }

    //confirm Password Validation

    let confirmPassword = document.getElementById("confirmPassword").ariaValueMax;
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    if(confirmPassword !== password){
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.textContent ="";
    }
    let PhoneNumber = document.getElementById("PhoneNumber").value ;
    let PhoneNumberError = document.getElementById("PhoneNumberError");
    if (!/^(?=.*\d){10,}$/.test(PhoneNumber)){
        PhoneNumberError.textContent = "PhoneNumber must be 10 digits";
        isValid = false;
    } else {
        passwordError.textContent= "";
    }
}
);