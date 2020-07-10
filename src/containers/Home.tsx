import React from 'react'
import Intro from '../components/home/Intro'
import styled from 'styled-components'

const Frame = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <Frame>
      <Intro/>
    </Frame>
  )
}

export default Home