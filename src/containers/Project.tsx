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

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  a {
    text-decoration: none;
    color: #414141;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Project = () => {
  return (
    <Frame id='project'>
      <Title>
        <a href='#project'>
          # Projects
        </a>
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