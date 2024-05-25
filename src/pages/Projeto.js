import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projeto from '../components/Projeto/Projeto'; 

function Pagina() {
  return (
    <div>
      <Header />
      <h1 style={{textAlign: 'center'}}>O Projeto Conexões Solidárias</h1>
      <Projeto />
      <Footer />
    </div>
  );
}

export default Pagina;