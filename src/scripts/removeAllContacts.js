import fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

const contactsPath = path.join(__dirname, 'src', 'db', 'db.json');

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify([]));
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
