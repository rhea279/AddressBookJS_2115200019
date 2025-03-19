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
    //First And Last Name should start with Capital and Minimum of 3 Characters
    static validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }
    //Address,City and State should have minimum 4 Characters
    static validateAddress(value) {
        return /^[A-Za-z0-9\s,.-]{4,}$/.test(value);  
    }
    //Check Zip Code Pattern
    static validateZip(zip) {
        return /^\d{5}(-\d{4})?$/.test(zip); 
    }
    //Phone Number should be 10 Characters long
    static validatePhone(phone) {
        return /^\+?[1-9][0-9]{10}$/.test(phone); 
    }
    //Check Email Pattern
    static validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];  
    }
    //Add A Contact
    addContact(contact) {
        try {
            if (contact instanceof Contact) {
                this.contacts.push(contact);
                console.log(`Contact Added: ${contact.firstName} ${contact.lastName}`);
            } else {
                throw new Error("Invalid contact object.");
            }
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }
     // Find a contact by first and last name
     findContact(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    // Edit an existing contact
    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (contact) {
            Object.assign(contact, newDetails);
            console.log("Contact updated successfully.");
        } else {
            console.log("Contact not found.");
        }
    }
    //View Contacts in AddressBook
    viewContacts() {
        console.log("Address Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phone}`);
        });
    }
}