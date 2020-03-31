import React from 'react';
import AppNavbar from './components/AppNavbar';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <AppNavbar  />
        <div style={{width: '85%', float: 'right'}}>
           <Main/>
        </div>      
    </div>
  );
}

export default App;
