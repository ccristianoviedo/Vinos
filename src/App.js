import './App.css';
import ItemContainer from './Components/Landing/itemContainer';
import NavBar from './Components/NavBar';
import NombreTienda from './Components/NombreTienda';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NombreTienda />
        <NavBar/>
        <div className='itemsLanding'>
          <ItemContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
