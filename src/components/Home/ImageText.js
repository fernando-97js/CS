import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 10px;
    margin-top:10px;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 300px;
    border-bottom: 1px solid black; // Adiciona uma linha preta na parte inferior de cada ImageContainer
    margin-bottom: 10px; // Adiciona uma margem inferior de 10px
    padding-top: 50px;

    &:last-child {
        border-bottom: none; // Remove a linha preta do último ImageContainer
    }

    img{
        width: 75%;
        height: 75%;
        object-fit: cover;
        border-radius: 20px;
        border: 5px solid #00aaff;
    }
`

const TextContainer = styled.div`
    flex-grow: 1;
    padding-left: 20px;
`

const Title = styled.h1`
    margin: 0;
    padding: 0;
`

const Text = styled.p`
    margin: 10px 0;
    font-size: 18px;
`

const Button = styled.button`
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #215791;
    }
`

function ImageText({images}){

    return(
        <Container>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image.src} alt={image.alt} />
                    <TextContainer>
                        <Title>{image.title}</Title>
                        <Text>{image.text}</Text>

                        <Link to="/ongs">
                <Button>Saiba Mais</Button>
            </Link>
                    </TextContainer>
                </ImageContainer>
            ))}
        </Container>
    )
}

export default ImageText