import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import ONGs from './pages/ONGs';
import Voluntario from './pages/Voluntario';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projeto" element={<Projeto />}/>
        <Route path="/ongs" element={<ONGs />}/>
        <Route path="/voluntario" element={<Voluntario />}/>
      </Routes>
    </Router>
  );
}
export default App;