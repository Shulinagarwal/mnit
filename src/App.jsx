import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../components/Home";
import Reviews from "../components/Reviews";
import Page from "../components/Page";
import Excite from "../components/Excite";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import Third from "../components/Third";
import Jobs from "../components/Jobs";
import Choose from '../components/Choose';
import Create from '../components/Create';
import Sign from '../components/Sign';
import Login from '../components/Login';

function App() {
  return (
      <>       
       <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Third />
            <Reviews />
            <Page />
            <Excite />
            <Slogan />
            <Footer />
          </>
        } />
        
       
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/choose" element={<Choose/>} />
        <Route path="/join" element={<Choose/>} />

        <Route path="/create" element={<Create/>} />
        <Route path="/signup" element={<Sign/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
      </>
    
  );
}

export default App;
