import { useContext } from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { RefreshNotesContext } from "../contexts/Contexts";

export default function Header() {
    const { refreshNotes } = useContext(RefreshNotesContext);

    return(
        <header className=" p-2 px-3 position-relative ">
        <div className="d-flex align-items-center">
        
            <Logo />
          
            <div className="flex-grow-1 mx-2">
                <SearchForm />
            </div>

            <div>
                <button onClick={refreshNotes} type="button" className="btn btn-outline-dark border-0 rounded-pill">
                    {/* <span className="d-flex align-items-center"><span className="fs-6 px-2 show-on-desk">{`More   `}</span><i className="fa-solid fa-bars"></i></span> */}
                    <span><i className="fa-solid fa-rotate-right fs-6"></i></span>
                </button>
            </div>

         </div>
        </header>
    )
}