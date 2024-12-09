import { client } from "../sanity/client";

export async function fetchNotes(noteId: string) {
  try {
    const query = `*[_type == "note" && id == $noteId][0]`;  
    const params = { noteId }; 
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching note:", error);
    throw error;
  }
}

export async function createNote(noteId: string, noteText: string) {
  try {
    const newNote = {
      _type: 'note',  
      id: noteId,
      _id: noteId,     
      note: noteText, 
    };

    const createdNote = await client.createOrReplace(newNote);

    return createdNote;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error; 
  }
}
