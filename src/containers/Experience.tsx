import React from 'react'
import styled from 'styled-components'
import ExpCard from '../components/experience/ExpCard'
import expdata from '../assets/data/expdata.json'
import Title from '../components/core/Title'

const Frame = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9faff;
  padding-bottom: 100px;
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
      <Title title={'Recent Experiences'}/>
      <BuildCard exp={'Ross'} />
      <BuildCard exp={'Snaptravel'} />
      <BuildCard exp={'Tembosocial'} />
    </Frame>
  )
}

export default Experience