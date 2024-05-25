import React, { useState } from 'react';
import aroucheForm from '../Formularios/aroucheForm.webp'

function Formulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  // Adiciona um estado para rastrear se os dados estão sendo enviados

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);  // Atualiza o estado para mostrar que os dados estão sendo enviados

        const formData = {
            Nome: nome,
            Email: email,
            Telefone: telefone,
            OngsId: 2
        };

        fetch('https://localhost:44316/api/VoluntariosArouche', {
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
          <h2>Como ajudar o Quentinhas do Arouche?</h2>
            O quentinhas do Arouche se reúne todos os domingos de manhã no Largo do Arouche, região central de São Paulo. O projeto possui uma página na plataforma apoia-se (https://apoia.se/quentinhasdoarouche), mas você também pode contribuir com o valor que desejar para a chave pix quentinhasdoarouche@gmail.com (a transferência irá para o nome de Cassiano Lima Nery Ferreira Braga, coordenador do projeto). Se quiser saber mais sobre os encontros semanais do projeto, é só preencher o formulário ao lado (não se preocupe, seus dados serão divulgados apenas para a ONG).
            <img src={aroucheForm} alt="Flore Form" />
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
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        </>
    );
}

export default Formulario;