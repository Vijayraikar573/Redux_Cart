import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import ProductCart from "./components/ProductCart";
import CartPage from "./components/cartPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1 style={{color:"yellow",marginLeft:"540px"}}>Mobile Shopping Cart</h1>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ProductCart/>}/>
        <Route path="/cart" element={ < CartPage /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
