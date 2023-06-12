import './App.css';
import {BrowserRouter} from 'react-router-dom';
import NavRouter from './Components/NavRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
