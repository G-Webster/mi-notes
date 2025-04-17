/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { NoteContent } from "./Types";
import ItemNote from "./ItemNote";
import { sortRecentNotes } from "./Functions";


export default function SearchForm() {
    const savedNotesList = localStorage.getItem('notes');
    const parsedData = JSON.parse(savedNotesList || '[]') as NoteContent[];
    const [notesList, setNotesList] = useState<NoteContent[]>(parsedData || []);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);


    //get query from user
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
         // console.log('search query: ', e.target.value);
   }

   //search in the array
   useEffect(() => {
    if((searchQuery.trim()).length > 3) {
        try {
          const searchResults =   parsedData.filter((note) => {
              return  (note.text + note.title).includes(searchQuery);
             })

           setNotesList(sortRecentNotes(searchResults));
           // console.log('Results found: ', searchResults);
            //showResults
            setShowResults(true);
            
        } catch (error) {
            console.error('Error while searching: ', error)
        }
    }
   }, [searchQuery])

   //close the search results container
   function closeResultsContainer () {
    if(showResults) {
        setShowResults(false)
    } else {
        setShowResults(true)
    }
   }


    return(
        <div>
            <div className="border rounded-pill px-2 py-1 bg-light">
             <div className="d-flex">
                <input 
                onChange={handleInputChange}
                className="w-100 border-0 bg-light" 
                type="search" 
                placeholder="Search notes..." 
                aria-label="Search" 
                style={{outline: 'none'}}/>
                <button className="btn btn-outline-dark border-0 rounded-pill" type="button">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                </button>
             </div>

             {/* live results */}
             {showResults && (searchQuery.trim()).length > 3 && 
             <div className="d-flex justify-content-center">
             <div className="bg-white position-absolute z-1 shadow p-3 m-2" >
                <div className="d-flex align-items-center border-bottom pb-2">
                    <div className="flex-grow-1 fw-medium fs-5">
                       Search
                    </div>
                    <div>
                    <button onClick={closeResultsContainer} className="btn btn-sm btn-outline-secondary border-0 rounded-pill" type="submit">
                    <span><i className="fa-solid fa-xmark fs-5"></i></span>
                   </button>
                    </div>
                </div>
                <div className="" style={{maxHeight: '100vh', overflowY: 'scroll'}}>
                    <div className="container p-2">
                           <div className="row">
                              {notesList.map((note, index) => (
                               <div onClick={closeResultsContainer} className="col border rounded p-2  m-2 mb-3" key={index}><ItemNote note={note} /></div>
                              ))}
                            </div>
                    </div>
               
               </div>
             </div>
             </div>
             }


             </div>
        </div>
    )
}