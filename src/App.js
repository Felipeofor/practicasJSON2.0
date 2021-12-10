import './App.css';
import { funciones } from './utils/funciones';

function App() {
 
  //consumiendo del Json
  const json = require('./response.json');
  const auditorias = json.auditorias;
  
funciones(auditorias);

  return (
    <div className="App">
      <h1>Segundo Json</h1>
    </div>
  );
}

export default App;
