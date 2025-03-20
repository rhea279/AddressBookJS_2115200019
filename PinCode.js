function validatePinCode(pin){
    const pinRegex=/^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}
