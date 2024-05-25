import styled from 'styled-components'
import { Link } from 'react-router-dom'

const VolunteerContainer = styled.section`
    background-color: #00aaff;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px 10px 10px 10px; 
`

const Button = styled.button`
    border: 2px solid #fff; /* Adiciona uma borda branca ao botão */
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #0000CD;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #215791;
    }
`

function PreFooter() {
    return (
        <VolunteerContainer>
            <blockquote>
                Quer fazer a diferença? Seja um voluntário e ajude a transformar vidas!
            </blockquote>
            <Link to="/voluntario">
                <Button>Saiba Mais</Button>
            </Link>
        </VolunteerContainer>
    )
}

export default PreFooter
