import './styles.css';

const Search = () => {
    return (
        <nav className="base-card quicksearch-card bg-secondary">
            <form className="d-flex quicksearch" role="search">
                <input type="text" id="fname" placeholder="Digite a sua busca" name="fname" />
                <button className="btn-icon-container">
                    <p>BUSCAR</p>
                </button>
            </form>
        </nav>
    );
}

export default Search;