import React, { useState } from 'react';
import './Form.css'; // Importe o arquivo CSS para aplicar os estilos
import floreForm from './floreForm.webp'

function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [fdv, setFDV] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  // Adiciona um estado para rastrear se os dados estão sendo enviados

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);  // Atualiza o estado para mostrar que os dados estão sendo enviados

        const formData = {
            Nome: nome,
            Email: email,
            Telefone: telefone,
            FDV: fdv,
            OngsId: 1
        };

        fetch('https://localhost:44316/api/VoluntariosFlorescer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setIsLoading(false);  // Atualiza o estado para mostrar que os dados foram enviados
            setIsSubmitted(true);
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);  // Atualiza o estado para mostrar que ocorreu um erro
        });
    };

    return (
        <>
        <div className="formularios">
          <div className="additional-text">
          <h2>Como ajudar a CASA FLORESCER?</h2>
            A Casa Florescer promove vários eventos, cursos e workshops para as pessoas acolhidas. Por isso, eles estão sempre precisando de novos talentos. Qual é o seu? Um instrumento musical, culinária, informática, talvez um segundo idioma? Que tal contribuir com as suas habilidades para a Casa Florescer? Você pode utilizar o formulário ao lado para disponibilizar seus dados de contato (não se preocupe, seus dados serão divulgados apenas para a ONG). No campo "Fale de Você", fale sobre alguma habilidade útil que você possua e gostaria de ensinar para ajudar na causa.
            <img src={floreForm} alt="Flore Form" />
          </div>
          <div className="form-container">
            <div className="form-content">
            {isLoading ? <p>Enviando dados...</p> : isSubmitted && <p>Dados Enviados</p>}
              <form onSubmit={handleSubmit}>
                <label>
                  Nome completo:
                  <input
                    type="text"
                    name="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Telefone (com DDD e apenas números):
                  <input
                    type="tel"
                    name="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type="email"
                    name="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Fale de você:
                  <textarea
                    name="FDV"
                    value={fdv}
                    onChange={e => setFDV(e.target.value)}
                  />
                </label>
                <br />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
          </div>
        </>
    );
}

export default Form;