import React from 'react'
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


export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props
  return <BrandLogoContainer>
    {!hideLogo && <LogoImage size={logoSize}>
      <img src={Logo} alt="Servicing Logo" />
    </LogoImage>}
    <LogoTitle size={textSize} color={color}>Servycing</LogoTitle>
  </BrandLogoContainer>
}
