import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/NewProject' element={<NewProject />} />
          <Route path='/Project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
