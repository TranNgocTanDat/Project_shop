
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import CreateBrowserRouter from './router/web';







function App() {

  return (
    <BrowserRouter>
      <div className="App"> 
        <CreateBrowserRouter/>
      </div>
    </BrowserRouter>

  );
}

export default App;
