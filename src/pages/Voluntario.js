import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormFlorescer from '../components/Formularios/FormFlorescer'
import FormArouche from '../components/Formularios/FormArouche'
import FormPac from '../components/Formularios/FormPac'

function Voluntario(){
    return(
        <div>
        <Header />
        <h1 style={{textAlign: 'center'}}>Área do Voluntário</h1>
        <FormFlorescer />
        <FormArouche />
        <FormPac />
        <Footer />
        </div>
    );
}
export default Voluntario;