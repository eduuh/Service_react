import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo'
import { Button } from '../Button'
import { Marginer } from '../marginer/marginer'

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
`

const AccessibilityContainer = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
`

const AchorLink = styled.a`
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
    return (
        <NavbarContainer>
            <BrandLogo />
            <AccessibilityContainer>
                <AchorLink>Specialist Portal</AchorLink>
                <Marginer direction="horizontal" margin={18} />
                <Separator />
                <Marginer direction="horizontal" margin={10} />
                <Button size={11}>Register</Button>
                <Marginer direction="horizontal" margin={6} />
                <AchorLink>Specialist Portal</AchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}