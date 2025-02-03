// In-memory contacts list (you can replace this with a database or API later)
let contacts = [
    { id: "2", first: "", last: "", favorite: false }, // Initial contact data
  ];
  
  // Function to create a new contact with default values
  export async function createContact() {
    const newContact = { 
      id: Date.now().toString(), // Unique ID generated from current timestamp
      first: "",  // Default first name
      last: "", // Default last name
      favorite: false, // Default favorite status
    };
    contacts.push(newContact); // Add the new contact to the contacts list
    return newContact; // Return the newly created contact
  }
  
  // Function to get all contacts
  export async function getContacts() {
    return contacts; // Return the entire list of contacts
  }
  
  // Function to get a specific contact by ID
  export async function getContact(id) {
    const contact = contacts.find(contact => contact.id === id); // Find contact by ID
    
    if (!contact) {
      // If no contact is found, return a default object with empty name
      return { first: "", last: "" };
    }
  
    return contact; // Return the found contact
  }
  
  // Function to update an existing contact
  export async function updateContact(id, updatedData) {
    const contactIndex = contacts.findIndex(contact => contact.id === id); // Find contact by ID
    
    if (contactIndex === -1) {
      // If the contact is not found, throw an error
      throw new Error('Contact not found');
    }
  
    // Update the contact with the new data
    contacts[contactIndex] = { ...contacts[contactIndex], ...updatedData };
    
    return contacts[contactIndex]; // Return the updated contact
  }
  
  
  
  