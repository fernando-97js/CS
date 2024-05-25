import styled from 'styled-components'
import { Link } from 'react-router-dom';

const QuoteContainer = styled.section`
    background-color: #00aaff;
    border-radius: 20px;
    padding: 20px;
    color: #fff;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px 10px 0px 10px; 
`

const Button = styled.button`
display: block;
margin: 10px auto;
padding: 10px 20px;
border: none;
border-radius: 10px;
background-color: #0000CD;
color: white;
cursor: pointer;
&:hover {background-color: #215791;}
`

function QuoteSection() {
    return (
        <QuoteContainer>
            <blockquote>
                Oi! Esse é o CONEXÕES SOLIDÁRIAS, um projeto criado com o intuito de promover o trabalho de algumas organizações beneficentes, e para que você mesmo possa se voluntariar e contribuir com as causas.
            </blockquote>
            <Link to="/projeto">
                <Button>Saiba Mais</Button>
            </Link>
        </QuoteContainer>
    )
}

export default QuoteSection