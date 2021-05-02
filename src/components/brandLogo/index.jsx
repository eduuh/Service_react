import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../images/Logos/logo.png"

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`
const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`

const LogoTitle = styled.h2`
 margin: 0;
 font-size: ${({ size }) => (size ? size + "px" : "20px")};
 color: ${({ color }) => (color ? color : '#fff')};
 font-weight: 700;
 margin-left: 6px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props
  return <BrandLogoContainer>
    {!hideLogo && <Link to="/"><LogoImage size={logoSize}>
      <img src={Logo} alt="Servicing Logo" />
    </LogoImage></Link>}

    <StyledLink to="/">
      <LogoTitle size={textSize} color={color}>Servycing</LogoTitle>
    </StyledLink>
  </BrandLogoContainer>
}
