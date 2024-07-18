
import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import { loadProduct } from "../src/store/Action";
import { useAppDispatch } from '../src/store/Store';
import { productItems } from './component/Pdata';
import MasterLayout from './pages/users/theme/masterLayout';



function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadProduct(productItems), [dispatch]);
    // dispatch(loadProduct(products));
  })
return (

    <div className="App">
       
          <Outlet/>
        
    </div>
  

  
);
}
export default App;
