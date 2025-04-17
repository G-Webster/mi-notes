import { useContext, useEffect, useState } from "react";
import { NoteContent } from "./Types";
import ItemNote from "./ItemNote";
import { sortRecentNotes } from "./Functions";
import { RefreshNotesContext } from "../contexts/Contexts";

export default function FetchItems() {
   const [notesList, setNotesList] = useState<NoteContent[]>([]);
   const { refreshNotesKey }  = useContext(RefreshNotesContext);

 useEffect(() => {
   // console.log('checking notes');
      const localNotesList = localStorage.getItem('notes') ;
      if (localNotesList) {
      try {
        const parsedData = JSON.parse(localNotesList) as NoteContent[];
        setNotesList(sortRecentNotes(parsedData));
        // console.log('Found notes', parsedData);
      }
      catch (error) {
       console.error(error);
      }
    } else {
        setNotesList([]);
        console.log('Found no notes');
    }

 }, [refreshNotesKey])

  if (notesList.length > 0) {
   // console.log('notes are found');
    return(
        <>
        <div className="fw-medium text-body-secondary p-2">Saved</div>
        <div className="container p-2">
        <div className="row">
           {notesList.map((note, index) => (
            <div className="col border rounded p-2  m-2 mb-3" key={index}><ItemNote note={note} /></div>
           ))}
         </div>
         </div>
        </>
         )
  } 

   if (notesList.length === 0) {
    //console.log('No notes');
    return (
        <div className="text-center text-body-secondary fs-6 py-2">You have no saved notes</div>
    )
  }

}