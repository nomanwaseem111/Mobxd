import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TopToBottomBtn from "./components/TopToBottomBtn";
import Home from "./pages/Home";


const App = () => {
 
 
  return (
    <>
 
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
    
   
     <TopToBottomBtn />
      <Footer />
      </>

  );
};

export default App;
