import React from 'react'
import styled from 'styled-components'
import { projProps } from '../../schema'


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
    transform: translateY(-10px);
   // box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    box-shadow: 0 5px 5px 0 rgba(154,160,185,.05)

    .title {
      color: #2196f3;
      text-decoration: underline;
    }
  }
`

const StyleImg = styled.img`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  object-fit: cover;
`

const TextContainer = styled.div`
  padding: 15px;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`

const Content = styled.p`
  color: #212121; 
`

const ProjCard = (props: projProps) => {
  return (
    <Container>
      <a href={props.visit}>
        <StyleImg src={props.img} />
        <TextContainer>
          <Title className='title'>{props.title}</Title>
          <Content>{props.summary}</Content>
        </TextContainer>
      </a>
    </Container>
  )
}

export default ProjCard