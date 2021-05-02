import React from 'react'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import { TopSection } from './topSection'
import styled from 'styled-components'
import { Navbar } from '../../components/navbar'
import { deviceSize } from '../../components/responsive'
import { Services } from './services'
import { SpecialistAds } from '../../components/specialistAds'
import { Marginer } from '../../components/marginer/marginer'
import { Footer } from '../../components/footer/'


const ContentContainer = styled.div`
 width: 100%;
 max-width: ${deviceSize.laptop}px;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 1em;
`

export function HomePage(props) {
    return <PageContainer>
        <TopSection>
            <Navbar />
        </TopSection>
        <InnerPageContainer>
            <ContentContainer>
                <Services />
            </ContentContainer>
        </InnerPageContainer>
        <Marginer direction="vertical" margin="5em" />
        <SpecialistAds />
        <Marginer direction="vertical" margin="5em" />
        <Footer />
    </PageContainer >
}
