import styled from 'styled-components'
import { BrandLogo } from '../../components/brandLogo';
import { Button } from '../../components/Button';
import { Marginer } from '../../components/marginer/marginer';
import TopSectionBackgroundImage from "../../images/landing-page.jpg";
import TheBestSpecialistImg from "../../images/Work only with the best.png"


const TopSectionContainer = styled.div`
  width: 100%;
  height: 900px;
  background: url(${TopSectionBackgroundImage});
  background-position: 0px -150px;
  background-size: cover;
`

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(38,70,83,0.9);
   display: flex;
   flex-direction: column;
`

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const StandoutImg = styled.div`
 width: 44em;
 height: 34em;


 img {
  width: 100%;
  height: 100%;
 }
`

const LogoContainer = styled.div`
 display: flex;
 align-items: flex-start;
 flex-direction: column;
`

const SloganText = styled.div`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
`

export function TopSection(props) {
  const { children } = props
  return <TopSectionContainer>
    <BackgroundFilter>
      {children}
      <TopSectionInnerContainer>
        <LogoContainer>
          <BrandLogo textSize={55} logoSize={55} />
          <Marginer direction="vertical" margin={8} />
          <SloganText>Find the right Specialist</SloganText>
          <SloganText>For the right Job</SloganText>
          <Marginer direction="vertical" margin={15} />
          <Button>Join now</Button>
        </LogoContainer>
        <StandoutImg>
          <img src={TheBestSpecialistImg} alt="The best specialist" />
        </StandoutImg>
      </TopSectionInnerContainer>
    </BackgroundFilter>
  </TopSectionContainer >
}