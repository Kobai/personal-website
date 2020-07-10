import React from 'react'
import styled from 'styled-components'
import ExpCard from '../components/experience/ExpCard'
import Title from '../components/core/Title'
import firebase from '../firebase.js'
import { expProps } from '../schema'

const Frame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`

const Experience = () => {
  const experienceRef = firebase.database().ref('experiences')
  const [experiences, setExperiences] = React.useState<Array<expProps>>([])

  if (experiences.length === 0) {
    experienceRef.on('value', (snapshot) => {
      setExperiences(snapshot.val())
    })
  }

  return (
    <Frame id='experience'>
      <Title title={'Recent Experiences'} />
      {experiences.map(item => 
        <ExpCard
          name={item.name}
          location={item.location}
          role={item.role}
          description={item.description}
          accomplishments={item.accomplishments}
        />
      )}
    </Frame>
  )
}

export default Experience