import AddNote from "../components/AddNote";
import FetchItems from "../components/FetchItems";


export default function HomePage() {

    return(
        <>
    
        <div className="position-relative"> 
            <div className="btn btn-light show-on-desk p-2 py-3 my-2 text-start d-flex" 
            data-bs-toggle="modal" data-bs-target="#addNoteModal"> 
                <div className="fs-6 bg flex-grow-1">Write a new note</div>
                <div className="fs-6 bg">
                <i className="fa-solid fa-pencil"></i>
                </div>
            </div>

        <FetchItems /> 

        {/* mobile floating button  */}
        <div className="show-on-mobile"> 
{/* create floating note button */}
<div className="position-fixed bottom-0 end-0">
<div className="m-3">
    <button  className="btn btn-dark rounded w-100" data-bs-toggle="modal" data-bs-target="#addNoteModal">
    <i className="fa-solid fa-plus fs-1"></i>
    </button>
</div>
</div>
        </div> 

        
        </div>
        <AddNote action="Add" />
        </>
    )
}