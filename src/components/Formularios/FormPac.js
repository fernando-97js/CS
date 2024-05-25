import React, { useState } from 'react';
import pacForm from '../Formularios/pacForm.jpg';

function TerceiroFormulario() {
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
            OngsId: 3
        };

        fetch('https://localhost:44316/api/VoluntariosPac', {
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
          <h2>Como ajudar PAC?</h2>
            O PAC também promove muitos eventos e workshops para as crianças acolhidas, por isso também sempre estão procurando talentos diversos. A ONG possui um site muito completo onde você ver mais fotos sobre o projeto e conhecer mais sobre seus idealizadores (https://www.projetopac.org.br/). Para saber como se voluntariar, você também pode preencher o formulário ao lado (não se preocupe, seus dados serão divulgados apenas para a ONG).
            <img src={pacForm} alt="Flore Form" />
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

export default TerceiroFormulario;