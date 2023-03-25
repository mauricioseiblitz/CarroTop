import 'bootstrap/js/src/collapse.js';

import './styles.css';

const NavBar = () => {
    return (
        <nav className="bg-warning navbar navbar-expand-md navbar-dark main-nav">
            <div className="container-fluid">
                <a href="link" className="nav-logo-text">
                    <h4>Carros Top</h4>
                </a>
                <div>
                    <ul>
                        <li>
                            <a href="link">HOME</a>
                        </li>
                        <li>
                            <a href="link">CATÁLOGO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;