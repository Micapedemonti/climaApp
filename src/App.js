
import './App.css';
import Fecha from './components/Fecha/Fecha';
import Api from './components/FetchAPi/FetchApi';
import Input from './components/Input/Input';

function App() {



  return (
    <div className="App">
          <h2>WEATHER APP</h2>
<Fecha/>
    <Api/>
    <Input/>

    </div>
  );
}

export default App;
