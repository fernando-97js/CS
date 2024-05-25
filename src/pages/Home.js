import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Home/Banner'
import QuoteSection from '../components/Home/QuoteSection'
import ImageText from '../components/Home/ImageText'
import Footer from '../components/Footer'
import Image1 from '../assets/ongCard1.jpg'
import Image2 from '../assets/ongCard2.jpg'
import Image3 from '../assets/ongCard3.jpg'
import PreFooter from '../components/Home/PreFooter'

function Home(){
    return(
        <div>
        <Header />
        <Banner />
        <QuoteSection/>
        <ImageText 
            images={[
                {src:Image1, alt: "Descrição", title: "Quentinhas do Arouche", text: "Quentinhas do Arouche é um coletivo criado no ano de 2020 que une varios voluntários majoritariamente LGBTQIAPN+, que se reunem todas as semanas no Largo do Arouche para distribuir comida para pessoas que se encontram em situação de rua." },
                {src:Image2, alt: "Descrição", title: "Casa Florescer", text: "Localizada no bairro do Bom Retiro, a Casa Florescer é um centro de acolhimento para travestis e mulheres transgênero em situação de vulnerabilidade social, que promove sua inclusão social e representatividade através de várias atividades de lazer e profissionalizantes" },
                {src:Image3, alt: "Descrição", title: "PAC", text: "O PAC (Projeto Amigos da Comunidade) trabalha com o desenvolvimento pessoal e social de crianças, adolescentes e famílias em situação de risco e vulnerabilidade social, por meio de ações socioeducativas, culturais e profissionais, focando a emancipação do indivíduo, o fortalecimento dos laços familiares e a conscientização do seu papel na sociedade" },
            ]}    
        />
        <PreFooter />
        <Footer />
        </div>
    );
}
export default Home;