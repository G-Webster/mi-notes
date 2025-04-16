import { useState } from "react";
import { NoteContent } from "./Types"
import AddNote from "./AddNote";

type ItemNoteProps = {
    note: NoteContent;
}

export default function ItemNote({ note} : ItemNoteProps ) {
const savedNotesList = localStorage.getItem('notes');
    const parsedData = JSON.parse(savedNotesList || '[]');
    const [notesList, setNotesList] = useState<NoteContent[]>(parsedData || []);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    //note actions:
        //remove from array
        const removeNoteItem = (noteId: number) => {

            try {
                //remove from the array list
            const newNotesList =    notesList.filter((note) => note.id !== noteId );
            setNotesList(newNotesList);
           //update the local storage
           localStorage.setItem('notes', JSON.stringify(newNotesList));
           //update delete state
           setIsDeleted(true);
            } catch (error) {
                console.error('Error when deleting: ', error)
            }
            
        }



    //function to get date
//      const getFormattedDate = ():string => {

//         const dateNow = new Date();
//         const currentDay = dateNow.getDate();
//         const currentMonth = dateNow.toLocaleString('default', {month: 'short'})
//         const currentYear = dateNow.getFullYear();
//         const formattedDate = currentDay + ' / ' + currentMonth + ' / ' + currentYear;
        
//         return  formattedDate;
//    }
   

    return(
        <>
        {isDeleted ? (
            <div className="alert alert-secondary" role="alert">
               This note has been deleted
            </div>
        ) : (
        <div style={{cursor: 'pointer'}} className="border rounded p-2 shadow-sm mb-2">
            <div className="d-flex align-items-center">
              <h4 className="flex-grow-1" data-bs-toggle="modal" data-bs-target={'#addNoteModal' + note.id}>{note.title}</h4>

              <div>
              <div className="dropstart">
                    <button type="button" className="btn btn-outline-secondary border-0 rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target={'#addNoteModal' + note.id}>Edit</button></li>
                        <li><button className="dropdown-item" onClick={() => removeNoteItem(note.id)}>Delete</button></li>
                    </ul>
                    </div>
              </div>
            </div>
             <div data-bs-toggle="modal" data-bs-target={'#addNoteModal' + note.id}>{note.text}</div>
        </div>
        )}

<AddNote note={note} action={'Edit'} />
        </>
    )
}