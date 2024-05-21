

//interface connection links
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector("#submit"); //Submit Button

const fNameMsg = document.querySelector("#fNameMsg"); // Error Msg for F.Name
const lNameMsg = document.querySelector("#lNameMsg"); // Error Msg for L.Name
const emailMsg = document.querySelector("#emailMsg"); // Error Msg for email
const phoneMsg = document.querySelector("#phoneMsg"); // Error Msg for phone number

//validity states

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let phoneValid = false;

function buttonFunctional() {
    submitBtn.disabled = !(firstNameValid && lastNameValid && emailValid && phoneValid);
    
}


// On click, button prompts checks
submit.addEventListener('click', (event) => {
    
});

firstName.addEventListener('change', (e) => {
    // Fires every time user clicks out of scope
    if (!validateNameCharacters(firstName.value)) {
        firstNameValid = false;
        invalidBox(firstName);
        console.dir(fNameMsg);
        errorMessage(fNameMsg, "Only lower and upper case letters are allowed.")
    } else if (!validateNameLength(firstName.value)) {
        firstNameValid = false;
        invalidBox(firstName);
        errorMessage(fNameMsg, "The First Name entered is either too short or too long.")
    } else {
        firstNameValid = true;
        validBox(firstName);
        disableError(fNameMsg);
    }
    buttonFunctional();
});

lastName.addEventListener("change", (e) => {
    // Fires every time user clicks out of scope
    if (!validateNameCharacters(lastName.value)) {
        lastNameValid = false;
        invalidBox(lastName);
        errorMessage(lNameMsg, "Only lower and upper case letters are allowed."); }
    else if (!validateNameLength(lastName)) {
        lastNameValid = false;
        invalidBox(lastName);
        errorMessage(lNameMsg, "The Last Name entered is either too short or too long.");}
    else { // All good, do the good stuff
        lastNameValid = true;
        validBox(lastName);
        disableError(lNameMsg); }
    buttonFunctional();// end of function
});

email.addEventListener("change", (e) => {
    // Fires every time user clicks out of scope
    if (validateEmail(email.value)) {
        emailValid = true;
        validBox(email);
        disableError(emailMsg)
    } else {
        emailValid = false;
        invalidBox(email)
        errorMessage(emailMsg, "Email address not valid");
    }
    buttonFunctional();
});

phone.addEventListener("change", (e) => {
    // Fires every time user clicks out of scope
    if (validatePhone(phone.value)) {
        phoneValid = true;
        validBox(phone);
        disableError(phoneMsg);
    } else {
        phoneValid = false;
        invalidBox(phone);
        errorMessage(phoneMsg, "Please enter a valid phone number");
    }
    buttonFunctional();
});

function validateNameLength(input) {
    // Checks length is between 1 and 15 characters
    let regex = new RegExp(".{1,15}$");
    return regex.test(input);
}

function validateNameCharacters(input) {
    let regex = new RegExp("^[a-zA-Z]{0,}$");
    return regex.test(input);
}

function validateEmail(input) {
    return RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$").test(input);
}


function validatePhone(input) {  
    // Remove all spaces from the phone number
    const cleanedNumber = input.replace(/\s+/g, "");
    // Define a regular expression for a valid phone number (digits only)
    const phoneNumberPattern = /^\d+$/;
    // Test the cleaned number against the regular expression
    return phoneNumberPattern.test(cleanedNumber);
}

const validBox = (element) => {
    element.style.borderColor = null;
}

const invalidBox = (element => {
    element.style.borderColor = "red";
})

function errorMessage(element, text) {
    element.innerText = text;
    element.style.color = "red";
};

function disableError(element) {
    element.textContent = "";
}