import React from 'react'
import styled from 'styled-components'
import ProjCard from '../components/project/ProjCard'
import projdata from '../assets/data/projdata.json'

const Frame = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9faff;
`
const Title = styled.div`
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
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`

const Project = () => {
  return (
    <Frame id='project'>
      <Title>
        <span style={{'color': '#9e9e9e'}}>#</span> Cool Projects
      </Title>
      <CardContainer>
        {projdata.map(item =>
          <ProjCard
            img={item.img}
            title={item.title}
            summary={item.summary}
            visit={item.visit}
          />
        )}
      </CardContainer>
    </Frame>
  )
}

export default Project