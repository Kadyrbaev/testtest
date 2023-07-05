import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import { styled } from 'styled-components'

const Registr = ({obj}) => {
  return (
    <RegistrStyle>
        <Header/>
        <Form obj={obj}/>
    </RegistrStyle>
  )
}

export default Registr

const RegistrStyle = styled.div`
    padding-bottom: 40px;
`

// const Margue = styled.marquee`
//   font: 20px;
// `
