import { useState } from "react";
import { NoteContent } from "./Types";
import ItemNote from "./ItemNote";

type AddNotePropts = {
    action: string;
    note?: NoteContent; // for editing note
}

export default function AddNote({action, note}: AddNotePropts) {
  
    const savedNotesList = localStorage.getItem('notes');
    const parsedData = JSON.parse(savedNotesList || '[]');
    const [notesList, setNotesList] = useState<NoteContent[]>(parsedData || []);
    const [noteTitle, setNoteTitle] = useState<string>(note?.title || '');
    const [noteText, setNoteText] = useState<string>(note?.text || '');
    const [noteContent, setNoteContent] = useState<NoteContent>({
       id: note?.id || 0,
       title: note?.title || '',
       text: note?.text || '',
       timestamp: new Date(),
    });
    const [showNotes, setShowNotes] = useState<boolean>(false);

    //get text input for note
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteText(e.target.value);
      
     
        setNoteContent({
            ...noteContent,
            id: Date.now(),
            text: e.target.value, //overwrite the key with a new value
        })
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(e.target.value);
    
        setNoteContent({
            ...noteContent,
            id: Date.now(),
            title: e.target.value, //overwrite the key with a new value
        })
    }

   

    //function to add notes to array

    const submitNote = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(noteContent) {
            try {
                //if editing
           

             //spread out the array and create a new one
             const updateList = [...notesList, noteContent];
            setNotesList(updateList)
            //save item to local storage
            localStorage.setItem('notes', JSON.stringify(updateList))
            console.log(notesList);
           // appendNoteToList();
            //empty title and content
            setNoteTitle('');
            setNoteText('');
            console.log('Note saved successfully')
            } 
            catch (error) {
                 console.error('Error', error)
            }
        }
    }

    //edit post
    const editNote = (noteId: number) => {
        try {
         //remove from the array list
        const filteredItems = notesList.filter((note) => note.id !== noteId );
         //spread out the array and create a new one
         const updatedList = [...filteredItems, noteContent];
         setNotesList(updatedList);
         //save item to local storage
         localStorage.setItem('notes', JSON.stringify(updatedList))
         console.log(notesList);
         console.log('A note has been successfully edited');
        // appendNoteToList();
            
        } catch (error) {
            console.error('Error editing note: ', error)
            
        }
        

    }

    const appendNoteToList = () => {
          setShowNotes(true);
    }



    
    return(
        <>





     {showNotes &&  (<div>
       {notesList.map((note, index) => (
        <div className="mt-2" key={index}>
           <ItemNote note={note} />
        </div> 
       ))}
        </div>
    )} 
    

<div className="modal fade" 
id={action === 'Add' ? 'addNoteModal' : `${'addNoteModal' + note.id }`}
data-bs-backdrop="static" 
data-bs-keyboard="false" 
tabIndex="-1" 
aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Note</h1>
        <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        
      <div className="border p-1 rounded">
             <input 
             placeholder="Title" 
             className="w-100 border-0 py-1 fw-bold fs-5" 
             type="text" name="noteTitle" 
             onChange={handleTitleChange} 
             value={noteTitle} 
             style={{outline: 'none'}} /> <br />
         
             <textarea 
             placeholder="Content" 
             className="w-100 border-0 vh-100" 
             name="noteText" 
             onChange={handleTextChange} 
             value={noteText}
             style={{outline: 'none'}}
             >

             </textarea>
             <div className="position-sticky bottom-0">
                  <div className="py-2">
                    
             {action === 'Add'  &&    
             <button disabled={(noteTitle.trim()).length === 0 || (noteText.trim()).length === 0} 
             type="button" className="btn btn-dark rounded-pill w-100" 
             onClick={submitNote}
             data-bs-dismiss="modal" aria-label="Close"
             >Add note</button>} 
             {action === 'Edit' &&   
             <button 
             disabled={(noteTitle.trim()).length === 0 || (noteText.trim()).length === 0} 
             type="button" 
             className="btn btn-dark rounded-pill w-100" 
             onClick={() => editNote(note.id)} 
             data-bs-dismiss="modal" aria-label="Close">Edit</button>}
                 </div>
             </div>
       </div>
       
      </div>
      
    </div>
  </div>
</div>

        </>
    )
}