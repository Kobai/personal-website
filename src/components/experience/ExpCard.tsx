import React from 'react'
import styled from 'styled-components'

interface expProps {
  name: string
  location: string
  role: string
  description: string
  accomplishments: Array<string>
}

const Container = styled.div`
  width: 70%;
  margin: 20px;
  background: white;
  box-shadow: 0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`

const TextContainer = styled.div`
  width: 100%;
  padding: 20px;
  text-align: left;

  li {
    font-size: 18px;
  }
`

const Title = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin: 0;
`

const Role = styled.span`
  color: #2196f3;
  font-size: 26px;
  font-weight: 400;
  margin: 0;
`

const Subtitle = styled.p`
  margin: 0;
  font-size: 16;
  color: #9e9e9e;
`

const Description = styled.p`
  font-size: 18px;
  width: 90%;
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
          <ul>{bulletPoints}</ul>
        )}
      </TextContainer>
    </Container>
  )
}

export default ExpCard