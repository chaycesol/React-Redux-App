import React from 'react';


//Importing App Components
import Characters from './components/Characters'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Characters />
      </header>
    </div>
  );
}


