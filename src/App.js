import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Seller from "./pages/seller";
import { useDispatch } from 'react-redux';
import {getProducts} from './actions/product'
import Listitems2 from './pages/Bayer/listtems2';
import Login from './pages/Login';
import ProductDetails from './pages/Bayer/ProductDetails';
import Admin from './pages/Admin/admin';


function App() {
  
  
  return (
      <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/auth" element={<Login/>}/>
        <Route exact path="/seller/*" element={<Seller/>}/>
        <Route exact path="/product" element={< Listitems2/>} />
        <Route exact path="/product/:id" element={< ProductDetails/>} />
        <Route exact path="/admin/*" element={<Admin/>}/>
       
      </Routes>
      </BrowserRouter>
   
      </>
  );
}

export default App;
