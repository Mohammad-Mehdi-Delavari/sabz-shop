import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
// import 'react-bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Header />
      <div className="p-t">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
