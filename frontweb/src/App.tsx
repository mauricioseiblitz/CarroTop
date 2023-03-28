import './assets/styles/custom.scss';

import './App.css';

import NavBar from 'components/NavBar';
import Home from 'pages/HOME';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
