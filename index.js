const contacts = require('./contacts');

(async () => {
  try {
    const allContacts = await contacts.listContacts();
    console.log('All contacts:', allContacts);

    const contactById = await contacts.getContactById('05olLMgyVQdWRwgKfg5J6');
    console.log('Contact by ID:', contactById);

    const newContact = await contacts.addContact('Mango', 'mango@gmail.com', '322-22-22');
    console.log('New contact:', newContact);

    const removedContact = await contacts.removeContact('qdggE76Jtbfd9eWJHrssH');
    console.log('Removed contact:', removedContact);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();