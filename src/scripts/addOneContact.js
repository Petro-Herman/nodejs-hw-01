import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);
    console.log('One new contact successfully added.');
  } catch (error) {
    console.error('Error adding new contact:', error);
  }
};

addOneContact();
