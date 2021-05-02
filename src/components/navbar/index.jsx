import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo'
import { Button } from '../Button'
import { Marginer } from '../marginer/marginer'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from '../responsive'

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) => useTransparent ? "transparent" : '#264653'};

`

const AccessibilityContainer = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
`

const AchorLink = styled(Link)`
font-size: 13px;
color: #fff;
cursor: pointer;
outline: none;
text-decoration: none;
transition: all 200ms ease-in-out;

&:hover{
 filter: contrast(0.6);
}
`

const Separator = styled.div`
 min-height: 35%;
  width: 3px;
  background-color: #fff;
`

export function Navbar(props) {

    const ismobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    const { useTransparent } = props
    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo />
            <AccessibilityContainer>
                {!ismobile &&
                    <AchorLink>Specialist Portal</AchorLink>
                }
                {!ismobile &&
                    <Marginer direction="horizontal" margin={18} />
                    &&
                    <Separator />}
                <Marginer direction="horizontal" margin={10} />
                <Link to="/customer/access/signup">
                    <Button size={11}>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin={6} />
                <AchorLink to="/customer/access/signin">Login</AchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}