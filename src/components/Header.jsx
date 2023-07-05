import React from 'react'
import { styled } from 'styled-components'
import mom from '../assets/mom.jpg';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderImg src={mom} alt="image" />
      <h2><span>Арыкбаева Бубайша </span><br />The most beautiful woman</h2>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
    /* background-color: #4710eb; */
    background: rgba(27, 26, 27, 0.55);
    /* position: fixed; */
    /* width: 100%; */
    top: 0;
    /* opacity: 0.70; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 23px;
    & h2{
        width: 400px;
    }
    span{
      color: yellow;
    }
`
const HeaderImg = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
`
