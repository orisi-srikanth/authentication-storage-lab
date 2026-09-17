// Finds the registration form from the HTML
const registerForm = document.getElementById("registerForm");

// Finds the name input
const nameInput = document.getElementById("name");

// Finds the email input
const emailInput = document.getElementById("email");

// Finds the age input
const ageInput = document.getElementById("age");

// Finds the password input
const passwordInput = document.getElementById("password");

// Finds the confirmation password input
const confirmPasswordInput = document.getElementById("confirmPassword");

// Finds the message element
const message = document.getElementById("message");


// Runs this function when the form is submitted
registerForm.addEventListener("submit", function(event) {

    // Stops the browser from refreshing the page
    event.preventDefault();

    // Gets the name entered by the user
    const name = nameInput.value.trim();

    // Gets the email entered by the user
    const email = emailInput.value.trim().toLowerCase();

    // Converts age from text into a number
    const age = Number(ageInput.value);

    // Gets the password
    const password = passwordInput.value;

    // Gets the confirmation password
    const confirmPassword = confirmPasswordInput.value;


    // Checks whether name is empty
    if (name === "") {

        // Shows error message
        message.textContent = "Please enter your name.";

        // Stops the function
        return;
    }


    // Checks whether email is empty
    if (email === "") {

        // Shows error message
        message.textContent = "Please enter your email.";

        // Stops the function
        return;
    }


    // Checks whether age is valid
    if (age < 13 || age > 100) {

        // Shows error message
        message.textContent = "Age must be between 13 and 100.";

        // Stops the function
        return;
    }


    // Checks whether password is too short
    if (password.length < 6) {

        // Shows error message
        message.textContent = "Password must contain at least 6 characters.";

        // Stops the function
        return;
    }


    // Checks whether both passwords are different
    if (password !== confirmPassword) {

        // Shows error message
        message.textContent = "Passwords do not match.";

        // Stops the function
        return;
    }


    // Calls the function from auth.js
    const result = registerUser(name, email, age, password);


    // Checks whether registration failed
    if (!result.success) {

        // Shows the error returned by auth.js
        message.textContent = result.message;

        // Stops the function
        return;
    }


    // Shows successful registration
    message.textContent = "Registration successful!";

    // Clears all form inputs
    registerForm.reset();

});
