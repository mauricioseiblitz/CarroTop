import './styles.css';

import '@popperjs/core';
import 'bootstrap/js/src/collapse';

const NavBar = () => {
    return (
        <nav className="bg-warning navbar navbar-expand-md navbar-dark main-nav">
            <div className="container-fluid">
                <a href="link" className="nav-logo-text">
                    <h4>Carros Top</h4>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#carrotop-navbar"
                    aria-controls="carrotop-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="carrotop-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <a href="link" className="active">HOME</a>
                        </li>
                        <li>
                            <a href="./pages/CATALOG/index.tsx">CATÁLOGO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;