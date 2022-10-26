import MainPage from './Components/MainPage';
import CalcCompanion from './Components/CalcCompanion';
import TestComponent from './Components/TestComponent'
import { useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  const [counter, setCounter] = useState(0);
  return (

    <div className="App">
    <MainPage />
    </div>
  );
}

export default App;
