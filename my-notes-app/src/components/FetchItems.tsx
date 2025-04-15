import { useEffect, useState } from "react";
import { NoteContent } from "./Types";
import ItemNote from "./ItemNote";


export default function FetchItems() {
   const [notesList, setNotesList] = useState<NoteContent[]>([]);

 useEffect(() => {
    console.log('checking notes');
      const localNotesList = localStorage.getItem('notes');
      if (localNotesList) {
      try {
        const parsedData = JSON.parse(localNotesList);
        setNotesList(parsedData);
        console.log('Found notes', parsedData);
      }
      catch (error) {
       console.error(error);
      }
    } else {
        setNotesList([]);
        console.log('Found no notes');
    }

 }, [])

  if (notesList.length > 0) {
    console.log('notes are found');
    return(
        <>
           {notesList.map((note, index) => (
            <div key={index}><ItemNote note={note} /></div>
           ))}
        </>
         )
  } 

   if (notesList.length === 0) {
    console.log('No notes');
    return (
        <div className="text-center text-body-secondary fs-5 py-2">You have no saved notes</div>
    )
  }

}