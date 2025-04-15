

export default function SearchForm() {

    return(
        <div>
            <div className="border rounded-pill px-2 py-1">
             <form className="d-flex" role="search">
                <input 
                className="w-100 border-0" 
                type="search" 
                placeholder="Search notes..." 
                aria-label="Search" 
                style={{outline: 'none'}}/>
                <button className="btn btn-outline-dark border-0 rounded-pill" type="submit">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                </button>
             </form>
             </div>
        </div>
    )
}