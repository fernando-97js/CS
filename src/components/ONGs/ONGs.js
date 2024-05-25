import React from 'react';
import './ONGs.css';
import florescer from './florescer.png'
import pac from './pac.png'
import arouche from './arouche.png'
import instagran from './instagram.png'

function ONGs () {
  return (
    <div className="ONGs">
      <main className="mainOngs">
        <section className="sectionPac">
          <div className="contentOngs">
            <div className="imageOngs">
              <img src={pac} alt="Exemplo 1" />
            </div>
            <div className="textOngs">
            <h2 class="tituloOngs">PAC - Amigos da Comunidade</h2>
              <div className="descriptionOngs">
                <p>Em 2003, um grupo de amigos começou a realizar visitas voluntárias em abrigos, iniciando na instituição CAAV – Sapopemba, que atendia crianças soropositivas. Com o tempo, o grupo expandiu suas visitas para mais dois abrigos, totalizando cerca de 140 crianças e adolescentes. As atividades evoluíram para incluir cursos de informática, atendimento odontológico e apoio financeiro para melhorias nos abrigos.
                <br/>
                <br/>
                O PAC Projetos Amigos da Comunidade, atuando no Distrito de Pirituba, segue as diretrizes do Plano Nacional de Promoção, Proteção e Defesa do Direito de Crianças e Adolescentes à Convivência Familiar e Comunitária. O projeto articula-se bem com serviços socioassistenciais e políticas públicas locais.
                <br/>
                <br/>
                O objetivo do PAC é promover o desenvolvimento pessoal e social de crianças, adolescentes e famílias em situação de vulnerabilidade social, através de ações socioeducativas, culturais e profissionais, visando à emancipação do indivíduo e ao fortalecimento dos laços familiares. Assim, o PAC busca melhorar as condições imediatas dos atendidos e fornecer ferramentas para seu desenvolvimento integral dentro da comunidade.</p>
              </div>
              <a href="https://www.instagram.com/projetoamigosdacomunidade/" target="_blank" rel="noopener noreferrer">
              <img src={instagran} alt="Instagram" class="instagram-icon" />
          </a>
          </div>
          </div>
        </section>
        <section className="sectionFlor">
          <div className="contentOngs">
            <div className="imageOngs">
              <img src={florescer} alt="Exemplo 2" />
            </div>
            <div className="textOngs">
            <h2 class="tituloOngs">Casa Florescer</h2>
              <div className="descriptionOngs">
                <p>A Casa Florescer é um centro de acolhida pioneiro no Brasil. Acolhe 30 mulheres  transexuais e travestis em situação de vulnerabilidade social, oferecendo apoio integral que inclui saúde, educação, capacitação profissional, cultura, lazer e inclusão no mercado de trabalho.
                <br/>
                <br/>
                  O centro proporciona atendimento psicológico em grupo, apoio social, palestras, oficinas e eventos temáticos, com um foco na reconstrução da autoestima e fortalecimento da identidade. Também realiza encaminhamentos para saúde, assessoria jurídica, documentação e cursos profissionalizantes, facilitando o acesso às políticas públicas.
                  <br/>
                  <br/>
                  Desde sua fundação em 2015, a Casa Florescer já acolheu 205 moradoras, muitas das quais hoje possuem autonomia social e financeira. As principais barreiras enfrentadas por essas mulheres incluem dificuldades no acesso à educação, preconceito, exclusão familiar e falta de vagas no mercado de trabalho, levando mais de 90% delas à prostituição como meio de sobrevivência.

                  A Casa Florescer trabalha para minimizar essas dificuldades, oferecendo um ambiente acolhedor que ajuda a desenvolver e potencializar cada indivíduo.</p>
              </div>
              <a href="https://www.instagram.com/casaflorescer1/" target="_blank" rel="noopener noreferrer">
              <img src={instagran} alt="Instagram" class="instagram-icon" />
          </a>
              
          </div>
          </div>
        </section>
        <section className="sectionArouche">
          <div className="contentOngs">
            <div className="imageOngs">
              <img src={arouche} alt="Exemplo 3" />
            </div>
            <div className="textOngs">
            <h2 class="tituloOngs">Quentinhas do Arouche</h2>
              <div className="descriptionOngs">
                <p>
                Há 4 anos, o projeto Quentinhas do Arouche reúne voluntários e cozinhas solidárias para levar alimentos a quem precisa, no coração da cidade mais rica do País. Surgido no auge da pandemia, o projeto mantém o objetivo de entregar 200 marmitas diárias, compostas por macarrão com proteína, água, pão e um docinho, para pessoas em situação de vulnerabilidade no Centro de São Paulo.
                <br/>
                <br/>
                O público atendido inclui pessoas em situação de rua, famílias em dificuldades, trabalhadores de baixa renda, idosos e crianças. Além de fornecer alimentação, os voluntários oferecem um sorriso, uma palavra de conforto e ouvidos atentos, criando um ambiente de apoio e solidariedade.
                <br/>
                <br/>
                Com o apoio contínuo de voluntários, o Quentinhas do Arouche espera expandir suas atividades, alcançar mais pessoas e continuar fazendo a diferença na vida de muitos. Este esforço reafirma o poder da ação coletiva e do cuidado ao próximo, essencial para fortalecer a dignidade e a esperança entre os assistidos.
                </p>
              </div>
              <a href="https://www.instagram.com/quentinhasdoarouche/" target="_blank" rel="noopener noreferrer">
              <img src={instagran} alt="Instagram" class="instagram-icon" />
          </a>
              
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ONGs;