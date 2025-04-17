import AddNote from "../components/AddNote";
import FetchItems from "../components/FetchItems";

export default function HomePage() {

   

    return(
        <>
    
        <div className="position-relative"> 
            <div className="show-on-desk p-2">
            <div className="btn border shadow-sm py-2 my-2 text-start d-flex" 
            data-bs-toggle="modal" data-bs-target="#addNoteModal"> 
                <div className="fs-6 fw-medium flex-grow-1 text-body-secondary">Write a note...</div>
                <div className="fs-6 bg">
                <i className="fa-solid fa-pencil text-body-secondary"></i>
                </div>
            </div>
            </div>

      <div className="show-on-desk">
       <br /><br />
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