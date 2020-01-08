import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 26px;
  height: 30px;
  max-width: 600px;
  background: white;
  padding: 15px 60px;
  border: solid 1px #fefefe;
  box-shadow: 0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22);
  border-radius: 10px;
  margin-bottom: 20px;
  transition: all .5s ease-in-out;
  color: #212121;

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }

  .pound {
    border-bottom: 2px solid transparent;
    transition : border-bottom 200ms ease-out;
  }
  &:hover {
    .pound {
      border-bottom: 2px solid #2196f3;
    }
  }
`

const Pound = styled.span`
  color: #9e9e9e;
  margin-right: 5px;
`


const Title = (props: any) => (
  <Container>
    <Pound className='pound'>#</Pound> {props.title}
  </Container>
)

export default Title
