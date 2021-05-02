import styled from 'styled-components'
import Styled from 'styled-components'
import { BrandLogo } from '../brandLogo'

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid #000000;
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
    margin-right:2%;
  }
`

const Bottomcontainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  height: 70px;
  border-top: 0.6px solid #000000;
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
  margin-left: 5px
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
                    <BrandLogo hideLogo textSize={22} color="#000" />
                </LeftBottomContainer>
                <RightBottomContainer>
                    icons
      </RightBottomContainer>
            </Bottomcontainer>
        </FooterContainer>
    )
}