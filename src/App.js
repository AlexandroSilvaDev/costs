import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </div>
      <Container customClass="min_height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Company' element={<Company />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/NewProject' element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
