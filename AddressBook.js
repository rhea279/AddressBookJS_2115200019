class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!Contact.validateName(firstName)) {
            throw new Error("First Name must start with a capital letter and have at least 3 characters.");
        }
        if (!Contact.validateName(lastName)) {
            throw new Error("Last Name must start with a capital letter and have at least 3 characters.");
        }
        if (!Contact.validateAddress(address)) {
            throw new Error("Address must be at least 4 characters long and contain valid characters.");
        }
        if (!Contact.validateAddress(city)) {
            throw new Error("City must be at least 4 characters long.");
        }
        if (!Contact.validateAddress(state)) {
            throw new Error("State must be at least 4 characters long.");
        }
        if (!Contact.validateZip(zip)) {
            throw new Error("Invalid Zip Code format. Must be 5 or 9 digits.");
        }
        if (!Contact.validatePhone(phone)) {
            throw new Error("Invalid Phone Number format. Must be 10-15 digits, with optional country code.");
        }
        if (!Contact.validateEmail(email)) {
            throw new Error("Invalid Email format.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    static validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    static validateAddress(value) {
        return /^[A-Za-z0-9\s,.-]{4,}$/.test(value);  // Allows letters, numbers, spaces, comma, dot, hyphen
    }

    static validateZip(zip) {
        return /^\d{5}(-\d{4})?$/.test(zip); // Matches '12345' or '12345-6789'
    }

    static validatePhone(phone) {
        return /^\+?[1-9][0-9]{9,14}$/.test(phone); // Supports international numbers
    }

    static validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
}

