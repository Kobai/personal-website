import React from 'react'
import styled from 'styled-components'

interface projProps {
  img: string
  title: string
  summary: string
  visit: string
}


const Container = styled.div`
  width: 350px;
  margin: 20px;
  background: white;
  box-shadow: 0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: all .2s ease-in-out;
  text-align: left

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`

const StyleImg = styled.img`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`

const TextContainer = styled.div`
  padding: 20px;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`

const Content = styled.p`
`

const ProjCard = (props: projProps) => {
  return (
    <Container>
      <a href={props.visit}>
        <StyleImg src={props.img} />
        <TextContainer>
          <Title>{props.title}</Title>
          <Content>{props.summary}</Content>
        </TextContainer>
      </a>
    </Container>
  )
}

export default ProjCard