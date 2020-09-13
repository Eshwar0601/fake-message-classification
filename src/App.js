import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FileInput';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div className="App">
      <div className="jumbotron bg-warning">
        <h2>Fake Message classification</h2>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Please input the text message below</h2>
      <FormInput />
      <Footer />
    </div>
  );
}

export default App;
