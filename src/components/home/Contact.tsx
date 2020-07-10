import React from 'react'
import styled from 'styled-components'
import Octocat from '../../assets/img/octocat.png'
import Linkedin from '../../assets/img/linkedin.png'
import Resume from '../../assets/img/resume.png'


const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  transition: all .2s ease-in-out;
`

const IconWrapper = styled.a`
  border-bottom: 3px solid transparent;
  transition : border-bottom 200ms ease-in;
  &:hover {
    border-bottom: 3px solid #2196f3;
  }
`

const Icon = styled.img`
  height: 30px;
  margin: 10px;
  opacity: 0.8;

  @keyframes fadeIn {
    from {opacity: 0.8;}
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
      <IconWrapper href='https://github.com/kobai'>
        <Icon src={Octocat} />
      </IconWrapper>
      <IconWrapper href='https://ca.linkedin.com/in/vkobay'>
        <Icon src={Linkedin} />
      </IconWrapper>
      <IconWrapper href='https://github.com/Kobai/resume/blob/master/resume_cv.pdf'>
        <Icon src={Resume}/>
      </IconWrapper>
    </Wrapper>
  )
}

export default Contact