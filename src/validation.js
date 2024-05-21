// Title: Required



// Email: Regex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$" 



// Each field displays red text describing necessary inputs if invalid and gains red border


//interface connection links
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const dob = document.querySelector("#dateOfBirth");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector("#submit"); //Submit Button

const fNameMsg = document.querySelector("#firstname > p"); // Error Msg for F.Name
const lNameMsg = document.querySelector("#lastname > p"); // Error Msg for L.Name
const emailMsg = document.querySelector("#email > p"); // Error Msg for email
const dobMsg = document.querySelector("#dateOfBirth > p"); // Error Msg for date of birth
const phoneMsg = document.querySelector("#phone > p"); // Error Msg for phone number

//validity states

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let dobValid = false;
let phoneValid = false;

function buttonFunctional() {
    submit.disabled = !(firstNameValid && lastNameValid && emailValid && dobValid && phoneValid);
}


// On click, button prompts checks
submit.addEventListener('click', (event) => {
    
});

firstName.addEventListener('change', (e) => {
    // Fires every time user clicks out of scope
    if (validateName(firstName.value)) {
        firstNameValid = true;
        validBox(firstName);
    } else {
        firstNameValid = false;
        invalidBox(firstName);
    }
    buttonFunctional();
});

lastName.addEventListener("change", (e) => {
    // Fires every time user clicks out of scope
    if (validateName(lastName.value)){
        lastNameValid = true;
        validBox(lastName);
    } else {
        lastNameValid = false;
        invalidBox(lastName);
    }
    buttonFunctional();
});

email.addEventListener("change", (e) => {
    // Fires every time user clicks out of scope
    if (validateEmail(email.value)) {
        emailValid = true;
        validBox(email);
    } else {
        emailValid = false;
        invalidBox(email)
    }
    buttonFunctional();
});

dob.addEventListener("change", (e) => {
  // Fires every time user clicks out of scope
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

function validateName(input) {
  // F.Name: Only lower & Upper case
  // Msg displayed = "Only lower and upper case letters are allowed."
  // Must be longer than 1 cha + shorter than 15
  // Msg displayed = "The First Name entered is either too short or too long."
  // L.Name: Only lower & Upper case
  // Msg displayed = "Only lower and upper case letters are allowed."
  // Must be longer than 1 cha + shorter than 15
    // Msg displayed = "The Last Name entered is either too short or too long."
    
    let regex = new RegExp('^[a-zA-Z]{1,15}$');
    return regex.test(input);
};


function validateEmail(input) {
    return /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(input);
}

function validatePhone(input) {
  return /^[+][0-9]{11,13}$|[0-9]{11}$/.test(input);
}

const validBox = (element) => {
    element.style.borderColor = "black";
    
}

const invalidBox = (element => {
    element.style.borderColor = "red";
    
})

function errorMessage(element, text) {
    element.textContent = text;
    element.style.color = "red";
};

function disableError(element) {
    element.textContent = "";
}