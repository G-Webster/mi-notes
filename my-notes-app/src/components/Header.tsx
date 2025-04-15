import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {

    return(
        <header className="border-bottom p-2 px-3">
        <div className="d-flex align-items-center">
        
            <Logo />
          
            <div className="flex-grow-1 mx-2">
                <SearchForm />
            </div>

            <div>
                <button type="button" className="btn btn-outline-dark border-0 rounded-pill">
                    <span className="fs-6 px-2 show-on-desk">{`More   `}<i className="fa-solid fa-bars"></i></span>
                </button>
            </div>

         </div>
        </header>
    )
}