import React from 'react'
import styled from 'styled-components'
import { expProps } from '../../schema'


const Container = styled.div`
  width: 70%;
  border-left: 3px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all .4s ease-in-out;

  &:hover {
    border-left: 3px solid #2196f3;
  }

  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
`

const TextContainer = styled.div`
  width: 100%;
  padding: 20px;
  text-align: left;

  li {
    color: #212121; 
    font-size: 18px;
  }

  @media only screen and (max-width: 1000px) {
    li {
      font-size: 16px;
    }
  }
`

const Title = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin: 0;

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`

const Role = styled.span`
  color: #2196f3;
  font-size: 26px;
  font-weight: 400;
  margin: 0;
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`

const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: #9e9e9e;
`

const Description = styled.p`
  font-size: 18px;
  width: 90%;
  color: #212121; 
  margin-bottom: -12px;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
`

const ExpCard = (props: expProps) => {

  const bulletPoints = props.accomplishments.map((x: string) => <li key={x}>{x}</li>)

  return (
    <Container>
      <TextContainer>
        <Title>
          {props.name + ' '}
          <Role>
            | {props.role}
          </Role>
        </Title>
        <Subtitle>
          {props.location}
        </Subtitle>
        <Description>
          {props.description}
        </Description>
        {props.accomplishments && (
          <ul style={{'paddingLeft': '16px'}}>{bulletPoints}</ul>
        )}
      </TextContainer>
    </Container>
  )
}

export default ExpCard