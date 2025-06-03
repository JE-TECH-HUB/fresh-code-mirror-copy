
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={
              <> <Navbar />
                <Home />
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
               <Navbar />
               <About />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                 <Navbar />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/courses" element={
              <> <Navbar />
                <Courses />
                <Footer />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
