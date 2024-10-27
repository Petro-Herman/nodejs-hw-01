// import { promise as fs } from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const fakeContact = createFakeContact();
      newContacts.push(fakeContact);
    }
    const updateContacts = [...existingContacts, ...newContacts];
    await writeContacts(updateContacts);
    console.log(`${number} new contacts successfully added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
