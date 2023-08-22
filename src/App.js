import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      
      <Route path="/about" element={<About/>}/>



     </Routes>
     
     
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
