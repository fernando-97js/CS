import React from 'react';
import './Projeto.css';
import nos from './nos.png';
import odstodas from './odstodas.png';

const Projeto = () => {
  return (
    <div className="projeto">
      <div className="projeto-container">
        <img src={nos} alt="Nos" className="image"/>
        <p className="description">Como projeto integrador do segundo semestre do curso superior de Análise e Desenvolvimento de sistemas da FECAP, quatro alunos (Emily, Sérgio, Kauã e Fernando) resolveram criar o Conexões Solidárias, um projeto dedicado a conectar Organizações Não Governamentais à pessoas que desejam não só conhecer mais sobre suas causas e como atuam, mas também proativamente apoiar as ONGs seja com doações, seu tempo livre ou qualquer outra forma de ajudar. Nosso objetivo é aumentar a visibilidade dessas organizações, facilitar a captação de recursos e promover o voluntariado, contribuindo para um mundo mais justo e sustentável.</p>
      </div>
      <div className="projeto-container">
        <img src={odstodas} alt="ODS Todas" className="image"/>
        <p className="description">Um dos principais traços dos projetos integradores, é a sua conexão com um ou mais Objetivos de Desenvolvimento Sustentáveis da ONU, que fazem parte de um pacto global assinado durante a Cúpula das Nações Unidas em 2015, pelos 193 países membros. A agenda é composta por 17 objetivos, com foco em superar os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo, promovendo o crescimento sustentável global até 2030. Em especial, focamos nos ODS 1 (Erradicação da Pobreza), 4 (Educação de Qualidade), 10 (Redução das Desigualdades) e 16 (Paz, Justiça e Instituições Eficazes).</p>
      </div>
    </div>
  );
}

export default Projeto;