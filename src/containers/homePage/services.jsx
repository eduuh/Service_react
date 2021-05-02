import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ServiceCard } from '../../components/ServiceCard'
import { Button } from "../../components/Button/index"


const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h1`
 font-weight: 900;
 color: #000;
`

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.4);
  color: #959595;
  font-size: 14px;

  
  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.7);
  }
`
const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`


export function Services(props) {
  const [services, setServices] = useState([])
  const isServiceEmpty = !services || (services && services.length === 0);
  const [isLoading, setLoading] = useState(false)


  const fetchServices = async () => {
    setLoading(true)
    try {
      const response = await axios.get("http://localhost:9000/services");
      setServices(response.data)
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchServices();
  }, [])

  return (
    <ServiceContainer>
      <Title>The most Used Services $ more</Title>
      <ServicesWrapper>
        {isLoading && <WarningText>Loading ....</WarningText>}
        {!isServiceEmpty && !isLoading ? services.map((service, id) => {
          return <ServiceCard key={id} {...service} />
        }) : null}
      </ServicesWrapper>

      <BottomContainer>
        {!isServiceEmpty && !isLoading && (
          <ViewMoreButton>View More</ViewMoreButton>
        )}
      </BottomContainer>
    </ServiceContainer>
  )
}