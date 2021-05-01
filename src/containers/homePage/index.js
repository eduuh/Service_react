import React from 'react'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import { TopSection } from './topSection'
import styled from 'styled-components'
import { Navbar } from '../../components/navbar'
import { deviceSize } from '../../components/responsive'
import { ServiceCard } from '../../components/ServiceCard'
import { Services } from './services'


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
    </PageContainer >
}
