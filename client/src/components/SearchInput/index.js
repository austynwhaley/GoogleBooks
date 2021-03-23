import React from 'react';

export function SearchInput(props) {
    return (
        <div className="row d-flex justify-content-center">
            <div className="search-field">
                <div>
                    <form className="search-bar form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  {...props}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export function SearchBtn (props) {

    return (
        <div className="row d-flex justify-content-center">
            <button {...props} className="searchBtn btn btn-outline-light my-2 my-sm-0 " style= {{marginBottom: "16%"}}>Search</button>
        </div>
        
    )
}
