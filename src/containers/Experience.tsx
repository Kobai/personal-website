import React from 'react'
import styled from 'styled-components'
import ExpCard from '../components/experience/ExpCard'
import expdata from '../assets/data/expdata.json'

const Frame = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9faff;
  padding-bottom: 100px;
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

interface BuildCardProps {
  exp: string
}

const BuildCard = (props: BuildCardProps) => {
  // @ts-ignore
  const content = expdata[props.exp]
  return (
    <ExpCard
      name={content.name}
      location={content.location}
      role={content.role}
      description={content.description}
      accomplishments={content.accomplishments}
    />
  )
}

const Experience = () => {
  return (
    <Frame id='experience'>
      <Title>
        <a href='#experience'>
          Some of My Recent Experiences
        </a>
      </Title>
      <BuildCard exp={'Ross'}/>
      <BuildCard exp={'Snaptravel'}/>
      <BuildCard exp={'Tembosocial'}/>
    </Frame>
  )
}

export default Experience