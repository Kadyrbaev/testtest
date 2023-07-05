import React from 'react'
import { styled } from 'styled-components'

const RenderText = ({aty, text}) => {
  return (
    <Container>
      <h1>{aty}</h1>
      <p>{text}</p>
    </Container>
  )
}

export default RenderText

const Container = styled.div`
    box-shadow: 0px 0px 10px 0.89px;
    width: 600px;
    margin: auto;
    p{
        background-color: #e3e3eb;
    }
`