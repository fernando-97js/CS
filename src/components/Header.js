import styled from 'styled-components';
import React from 'react';
import NavBar from './NavBar';
import logo from '../assets/logo.png'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00aaff;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
`;

function Header() {
    return (
        <HeaderContainer>
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src={logo} alt="Logo" width="60" height="60" />
                <p style={{ marginTop: '10px' }}>CONEXÕES SOLIDÁRIAS</p>
            </div>
        </HeaderContainer>
    );
}

export default Header;