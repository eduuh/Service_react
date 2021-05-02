import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Marginer } from "../marginer/marginer";
import { deviceSize } from "../responsive";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0,0,0.17);
  margin: 0.5em;
  margin-bottom: 1.3em;
`

const TopContainer = styled.div`
  width: 100%;
`

const ServiceThumbnail = styled.div`
 width: 100%;
 height: 100%;


 img {
   width: 100%;
   height: 100%;
 }
`
const Title = styled.h2`
 font-weight: 900;
 color: #000;
 text-align: start;

 @media screen  and (max-width: ${deviceSize.mobile}px){
     font-size: 20px;
  }
`

const SpecialistName = styled.h4`
 margin: 0;
 color: rgba(151,151,151,1);
 font-size: 14px;
 font-weight: 600;
`

const ContentContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 flex: 1;
 padding: 1em;
 
 @media screen  and (max-width: ${deviceSize.mobile}px){
     padding: 0px;
  }
`

const RatingContainer = styled.div`
  display: flex;
  color: #ebe204;
`

const PriceContainer = styled.div`
 display: flex;
 align-items: center;
`

const PriceText = styled.div`
 margin-left: 3px;
 color: #2ba679;
 font-weight: 700;
`

const StartingAtText = styled.h6`
 margin: 0;
 color: rgb(37, 35, 35);
 font-weight: 500;
`

const BottomContainer = styled.div`
 width: 100%;
 height: 32px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-top: 1px solid rgba(15,15,15,0.19);
 padding: 0 10px;
`
export function ServiceCard(props) {
  const { thumbnailUrl, specialist, title, rating, rate } = props
  return <CardContainer>
    <TopContainer>
      <ServiceThumbnail>
        <img src={thumbnailUrl} alt={title} />
      </ServiceThumbnail>
    </TopContainer>
    <ContentContainer>
      <Title>{title}</Title>
      <Marginer direction="vertical" margin={10} />
      <SpecialistName>{specialist.fullName}</SpecialistName>
    </ContentContainer>
    <BottomContainer>
      <RatingContainer>
        <FontAwesomeIcon icon={faStar} size="sm" />
        {rating}
      </RatingContainer>
      <PriceContainer>
        <StartingAtText>STARTING AT</StartingAtText>
        <PriceText>${rate}/hr</PriceText>
      </PriceContainer>
    </BottomContainer>
  </CardContainer>
}