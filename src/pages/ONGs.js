import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ONGs from '../components/ONGs/ONGs';
import FormONG from '../components/Formularios/FormOngs';

function ONG(){
    return(
        <div>
        <Header />
        <h1 style={{textAlign: 'center'}}>ONGs</h1>
        <ONGs />
        <FormONG />
        <Footer />
        </div>
    );
}
export default ONG;