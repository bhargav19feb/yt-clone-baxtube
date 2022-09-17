import React from 'react'
import styled from 'styled-components';
import Logo from "./../../images/logo.png";
import {  Link } from "react-router-dom";
const Img = styled.img`
    height: 28px;
`
const LogoWithText = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
`
export const P = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
`

const LogoImage = () => {
  return (
    <>
    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
    <LogoWithText as="a">
        <Img src={Logo} />
        <P >YouTube</P>
    </LogoWithText>
    </Link>
    </>
  );
}

export default LogoImage