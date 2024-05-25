import React from 'react';
import styled from 'styled-components';
import	{ Link } from 'react-router-dom';

const NavBarContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 1em 0;
list-style: none;
`

const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;
margin: 0 1em;
&:hover{
    text-decoration: underline;
}
`

function NavBar(){
    return(
        <NavBarContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projeto">O Projeto</StyledLink>
            <StyledLink to="/ongs">ONGs</StyledLink>
            <StyledLink to="/voluntario">Área do Voluntário</StyledLink>
        </NavBarContainer>
    );
}

export default NavBar;