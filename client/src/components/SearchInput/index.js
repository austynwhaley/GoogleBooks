import React from 'react';

function SearchInput(props) {
    return (
        <div className="row d-flex justify-content-center">
            <div className="search-field">
                <div>
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  {...props}/>
                      <SearchBtn/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export function SearchBtn (props) {

    return (
        <button {...props} className="btn btn-outline-light my-2 my-sm-0">Search</button>
    )
}

export default SearchInput;