import React from 'react'
import Intro from '../components/home/Intro'
import styled from 'styled-components'

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, #f9faff);
`

const Home = () => {
  return (
    <Frame>
      <Intro/>
    </Frame>
  )
}

export default Home