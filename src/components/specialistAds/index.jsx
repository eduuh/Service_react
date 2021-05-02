import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo/index'
import { Marginer } from '../marginer/marginer'
import FarminImage from '../../images/Work only with the best.png'
import { Button } from '../Button'

const SpecialistContainer = styled.div`
 width: 100%;
 height: 500px;
 display: flex;
 background-color: #264653;
 `
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SloganContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

const Slogan = styled.h2`
 margin: 0;
 font-size: 20px;
 color: #fff;
 font-weight: 700;
 line-height: 1.6;
`

const StandoutImage = styled.div`
 width: 35em;
 height: 29em;

 img {
 width: 100%;
 height: 100%;

 }
`
export function SpecialistAds(props) {
    return (
        <SpecialistContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={40} textSize={35} />
                    <Marginer direction="vertical" margin="1em" />
                    <SloganContainer>
                        <Slogan>You're a Specialist, and you</Slogan>
                        <Slogan>have an oustanding</Slogan>
                        <Slogan>service to offer?</Slogan>
                    </SloganContainer>
                    <Marginer direction="vertical" margin="10px" />
                    <Button size={15}>Join as Specialist</Button>
                </SloganContainer>
                <StandoutImage>
                    <img src={FarminImage} alt="farming image" />
                </StandoutImage>
            </ContentContainer>
        </SpecialistContainer>
    )
}