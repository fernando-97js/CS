import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requer CSS importado
import Image1 from '../Home/assets/pac.jpg';
import Image2 from '../Home/assets/arouche.jpg';
import Image3 from '../Home/assets/florescer.jpg';
import Image4 from '../Home/assets/pac2.jpg'
import Image5 from '../Home/assets/arouche2.webp'
import Image6 from '../Home/assets/florescer2.webp'

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const BannerContainer = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-weight: bold;
    color: #0047ba;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    border-radius: 20px;

`;

function Banner() {
    return (
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
            {images.map((image, index) => (
                <BannerContainer key={index}>
                    <img src={image} alt="Banner" style={{height: '300px', width: '100%'}} />
                </BannerContainer>
            ))}
        </Carousel>
    );
}

export default Banner;