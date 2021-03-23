import React from 'react';
import {Link} from "react-router-dom";

function Navbar () {

    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#c8dbe9'}}>
            <div className="container">
                <Link className="navbar-brand" to="/saved">Saved Books</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;