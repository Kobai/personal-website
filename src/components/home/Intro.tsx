import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import DA from '../../assets/img/da.png'

const Container = styled.div`
  margin-top: -100px;
  background: rgba(255, 255, 255, 0.95);
  // border: solid 1px #fefefe;
  // box-shadow: 0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22);
  // background: white;
  border-radius: 10px;
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
  margin-left: 10px;
  margin-right: 10px;
  transition: all .5s ease-in-out;

  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22);
  }

  @media only screen and (max-width: 1000px) {
    padding-left: 40px;
    padding-right: 40px;
  }

`

const Name = styled.p`
  font-size: 5vh;
  margin-top: 100px;
  font-weight: 300;
  color: black;
  margin-bottom: -10px

  @media only screen and (max-width: 1000px) {
    margin-top: 40px;
    font-size: 36px;
  }
`

const Subtext = styled.p`
  margin: 30px;
  margin-top: 12px;
  font-weight: 300;
  font-size: 2.5vh;
  color: black;
`

const StyledDA = styled.img`
  height:40px;
  margin-bottom: 10px;
  animation: fadein infinite 2s linear;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

const Intro = () => {
  return (
    <Container>
      <Name>victor <span style={{'color': '#2196f3'}}>kobayashi</span></Name>
      <Subtext>3rd year CS @ UWaterloo</Subtext>
      <Contact/>
      <a href='#experience'>
        <StyledDA src={DA} />
      </a>
    </Container>
  )
}

export default Intro
