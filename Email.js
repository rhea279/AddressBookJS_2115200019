class EmailValidator {
    constructor(email) {
        this.email = email;
    }

    validateEmail() {
        // Regex pattern to validate the email structure
        const emailRegex = /^[a-zA-Z0-9._+-]+@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

        if (emailRegex.test(this.email)) {
            console.log(`${this.email} is a valid email.`);
        } else {
            console.log(`${this.email} is an invalid email.`);
        }
    }
}

// Test cases
let validEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc+xyz@bridgelabz.co",
    "abc-xyz@bridgelabz.co",
    "abc.xyz@bridgelabz.co.in",
    "abc_xyz@bridgelabz.co.us"
];

let invalidEmails = [
    "abc@bridgelabzcom",      
    "abc@bridgelabz.",       
    "abc@bridgelabz.co.inn",  
    "abc@bridge.co.in",      
    "abc#xyz@bridgelabz.co",  
    "abcxyz@bridgelabz"       
];

// Validate valid emails
validEmails.forEach(email => {
    let validator = new EmailValidator(email);
    validator.validateEmail();
});

// Validate invalid emails
invalidEmails.forEach(email => {
    let validator = new EmailValidator(email);
    validator.validateEmail();
});
