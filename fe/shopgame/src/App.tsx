
import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet } from "react-router-dom";
import CreateBrowserRouter from './router/web';
import { loadProduct } from "../src/store/Action";
import { productItems } from './component/Pdata';
import { useAppDispatch } from '../src/store/Store';

function App() {
  

  return (
      
      <div className="App">
        <CreateBrowserRouter />
        
      </div>  
  
  );
}

export default App;
