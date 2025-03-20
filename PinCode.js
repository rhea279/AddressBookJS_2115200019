function validatePinCode(pin) {
    // Regex pattern: Accepts 6 digits with optional space in between, disallows non-numeric prefixes/suffixes
    const pinRegex = /^[0-9]{3}\s?[0-9]{3}$/;

    if (pinRegex.test(pin)) {
        console.log(`Valid PIN Code: ${pin}`);
    } else {
        console.log(`Invalid PIN Code: ${pin}`);
    }
}

// Test Cases
validatePinCode("400088");  
validatePinCode("400 088"); 
validatePinCode("A400088"); 
validatePinCode("400088B"); 
validatePinCode("4000@88"); 
