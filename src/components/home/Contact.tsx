import React from 'react'
import styled from 'styled-components'
import Octocat from '../../assets/img/octocat.png'
import Linkedin from '../../assets/img/linkedin.png'
import Resume from '../../assets/img/resume.png'


const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`

const Icon = styled.img`
  height: 30px;
  margin: 10px;
  opacity: 0.75;

  @keyframes fadeIn {
    from {opacity: 0.75;}
    to {opacity: 1;}
  }
  &:hover {
    opacity: 1;
    animation-name: fadeIn;
    animation-duration: 0.1s;
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <a href='https://github.com/kobai'>
        <Icon src={Octocat} />
      </a>
      <a href='https://ca.linkedin.com/in/vkobay'>
        <Icon src={Linkedin} />
      </a>
      <a href='https://drive.google.com/file/d/1rAOD1xooPDD7h56dxwkl3K45H3wQFYv-/view?usp=sharing'>
        <Icon src={Resume}/>
      </a>
    </Wrapper>
  )
}

export default Contact