import React from 'react'
import PropTypes from "prop-types";

export default function Navbar(props) {
    const {appName,togalMode,Text,them} = props
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${them} bg-${them}` }>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{appName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togalMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{Text}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.defaultProps = {
    appName: "TCAPP",
  };

Navbar.prototype = {
    appName: PropTypes.string.isRequired,
};
