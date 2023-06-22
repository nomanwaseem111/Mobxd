import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TopToBottomBtn from "./components/TopToBottomBtn";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    
   
     <TopToBottomBtn />
      <Footer />
    </>
  );
};

export default App;
