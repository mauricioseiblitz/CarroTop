import './assets/styles/custom.scss';

import './App.css';

import NavBar from 'components/NavBar';
import Home from 'pages/HOME';
import Catalog from 'pages/CATALOG';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Catalog />
    </div>
  );
}

export default App;
