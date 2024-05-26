import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         
       </Routes>
     </main>
   </Router>
 );
};

export default App;