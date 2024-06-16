
import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet } from "react-router-dom";
import CreateBrowserRouter from './router/web';
import { loadProduct } from "../src/store/Action";
import { productItems } from './component/Pdata';
import { useAppDispatch } from '../src/store/Store';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadProduct(productItems));
    // dispatch(loadProduct(products));
  }, [dispatch])

  return (

      <div className="App">
        <CreateBrowserRouter />
        
      </div>  
  
  );
}

export default App;
