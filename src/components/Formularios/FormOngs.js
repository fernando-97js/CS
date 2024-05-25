import React, { useState } from 'react';
import './OngForm.css';

function OngForm() {
    const [ongNome, setOngNome] = useState('');
    const [ongEmail, setOngEmail] = useState('');
    const [ongTelefone, setOngTelefone] = useState('');
    const [ongInfo, setOngInfo] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  // Adiciona um estado para rastrear se os dados estão sendo enviados

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);  // Atualiza o estado para mostrar que os dados estão sendo enviados

        const ong = {
            OngNome: ongNome,
            OngEmail: ongEmail,
            OngTelefone: ongTelefone,
            OngInfo: ongInfo
        };

        fetch('https://localhost:44316/api/Ongs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ong)
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
        <div className="ong-form">
            <h2>Gostaria que a sua ONG aparecesse aqui? É só preencher os formulário abaixo e entraremos em contato</h2>
            {isLoading ? <p>Enviando dados...</p> : isSubmitted && <p>Dados Enviados</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input name="Nome" type="text" value={ongNome} onChange={e => setOngNome(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input name="Email" type="email" value={ongEmail} onChange={e => setOngEmail(e.target.value)} />
                </label>
                <label>
                    Telefone:
                    <input name="Telefone" type="tel" value={ongTelefone} onChange={e => setOngTelefone(e.target.value)} />
                </label>
                <label>
                    Fale um pouco sobre a sua Ong:
                    <textarea name="OngInfo" value={ongInfo} onChange={e => setOngInfo(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default OngForm;