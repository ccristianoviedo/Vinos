import './App.css';
import NavBar from './Components/NavBar';
import NombreTienda from './Components/NombreTienda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NombreTienda />
       <NavBar/>
      </header>
    </div>
  );
}

export default App;
