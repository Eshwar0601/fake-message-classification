import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FileInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fake Message classification</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Please input the text message below</h2>
        <FormInput />
      </header>
    </div>
  );
}

export default App;
