import fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

const contactsPath = path.join(__dirname, 'src', 'db', 'db.json');

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    contacts.pop();
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    console.log('Last contact removed successfully.');
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
