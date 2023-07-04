import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import { styled } from 'styled-components'

const Registr = () => {
  return (
    <RegistrStyle>
        <Header/>
        <marquee>test</marquee>
        {/* <RegistrText>Сайтка кируу учун апамдын туулган кун,айын туура толтуруу керек</RegistrText> */}
        <Form/>
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
