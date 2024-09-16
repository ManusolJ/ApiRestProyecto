import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowPokemon from './components/ShowPokemon.jsx';
import CreatePokemon from './components/CreatePokemon.jsx';
import EditPokemon from './components/EditPokemon.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowPokemon/>} />
          <Route path='/create' element={ <CreatePokemon/>} />
          <Route path='/edit/:id' element={ <EditPokemon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;