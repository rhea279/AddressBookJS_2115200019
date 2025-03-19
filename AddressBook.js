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
            throw new Error("Invalid Zip Code format. Must be 6 digits.");
        }
        if (!Contact.validatePhone(phone)) {
            throw new Error("Invalid Phone Number format. Must be 10 digits, with optional country code.");
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
        return /^\d{6}$/.test(zip); 
    }
    //Phone Number should be 10 Characters long
    static validatePhone(phone) {
        return /^(?:\+91\s?|0)?[6-9]\d{9}$/.test(phone);  
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
    // Check if a contact already exists
    isDuplicate(firstName, lastName) {
        return this.contacts.some(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    // Add A Contact (with duplicate check)
    addContact(contact) {
        try {
            if (!(contact instanceof Contact)) {
                throw new Error("Invalid contact object.");
            }

            if (this.isDuplicate(contact.firstName, contact.lastName)) {
                console.log(`Contact ${contact.firstName} ${contact.lastName} already exists.`);
                return;
            }

            this.contacts.push(contact);
            console.log(`Contact Added: ${contact.firstName} ${contact.lastName}`);
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
    
    // Delete a contact by first and last name
    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
        } else {
            console.log("Contact not found.");
        }
    }
    // Search contacts by City
    searchByCity(city) {
        const result = this.contacts.filter(contact => 
            contact.city.toLowerCase() === city.toLowerCase()
        );
        return result;
    }

    // Search contacts by State
    searchByState(state) {
        const result = this.contacts.filter(contact => 
            contact.state.toLowerCase() === state.toLowerCase()
        );
        return result;
    }

    //View Contacts in AddressBook
    viewContacts() {
        console.log("Address Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phone}`);
        });
    }
     // Count the number of contacts using reduce()
     countContacts() {
        const count = this.contacts.reduce((total) => total + 1, 0);
        console.log(`Total number of contacts: ${count}`);
        return count;
    }
}