import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo'
import { deviceSize } from "../responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0,0,0,0.3);


 @media screen  and (max-width: ${deviceSize.mobile}px){
    padding:2em 10px;
  }
`
const TopContainer = styled.div`
 width: 100%;
 display: flex;
 margin-bottom: 10px;

`
const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &:not(:last-of-type){
    margin-right:3%;
  }
`

const Bottomcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
`
const RightBottomContainer = styled.div`
 display: flex;
`
const LeftBottomContainer = styled.div`
 display: flex;
`
const Title = styled.h2`
 margin: 0;
 margin-bottom: 8px;
 color: #000;
 font-weight: 600px;
 font-size: 20px;
`

const Flink = styled.a`
 text-decoration: none;
 color: #6F6F6F;
 font-weight: 500;
 font-size: 15px;
 cursor: pointer;

 &:not(:last-of-type){
  margin-left: 8px;
 }
`
const SocialIcon = styled.div`
 color: #8a8a8a;
 font-size: 20px;
 cursor: pointer;
 transition: background-color, 200ms ease-in-out;
 
 &:not(:last-of-type){
   margin-right: 10px;
 }

 &:hover{
   color: #777777;
 }
`
const PrivacyText = styled.h6`
 color: #a3a3a3;
 font-size: 14px;
 margin: 0;
 margin-left: 10px;
 display: flex;
 margin-top: 5px;
 align-items: center;

@media screen  and (max-width: ${deviceSize.mobile}px){
    font-size: 12px;
  }
`


export function Footer(props) {
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Category</Title>
          <Flink>Car Repair</Flink>
          <Flink>Capentry</Flink>
          <Flink>Cleaning</Flink>
          <Flink>Land Scaping</Flink>
          <Flink>Others</Flink>
        </ContentContainer>
        <ContentContainer>
          <Title>Access</Title>
          <Flink>Login</Flink>
          <Flink>Join us</Flink>
          <Flink>Login as SpeciaList</Flink>
          <Flink>Become a SpeciaList</Flink>
        </ContentContainer>
      </TopContainer>
      <Bottomcontainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8a8a8a" textSize={22} />
          <PrivacyText>&#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </Bottomcontainer>
    </FooterContainer>
  )
}