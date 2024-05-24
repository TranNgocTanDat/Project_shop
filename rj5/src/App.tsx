import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/Store";
import ProductList from "./component/ProductList";
import {loadProduct} from "./store/Action";
import {products} from "./data/ProductData";
import {Outlet} from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/main";
import '../src/component/main.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct(products));
    // dispatch(loadProduct(products));
  })
  return (

      <div className="App">

          <Header />
          <main>
              <Outlet></Outlet>
          </main>
      </div>
  );
}

export default App;
