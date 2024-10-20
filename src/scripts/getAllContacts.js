import fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();
const contactsPath = path.join(__dirname, 'src', 'db', 'db.json');

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
