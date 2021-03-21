import React from 'react';

function SearchInput(props) {
    return (
        <div className="row d-flex justify-content-center">
            <div className="search-field">
                <div>
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  {...props}/>
                      <SearchBtn>Search</SearchBtn>
                    </form>
                </div>
            </div>
        </div>
    );
}

export function SearchBtn ({className, children, onClick }) {

    return (
        <button onClick={onClick} className={["btn btn-outline-light my-2 my-sm-0", className].join(" ")}>{children}</button>
    )
}

export default SearchInput;