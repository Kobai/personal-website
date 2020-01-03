import React from 'react'
import styled from 'styled-components'
import ProjCard from '../components/project/ProjCard'
import projdata from '../assets/data/projdata.json'
import Title from '../components/core/Title'

const Frame = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9faff;
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
      <Title title={'Cool Projects'}/>
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