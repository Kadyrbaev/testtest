import {Button, TextField } from '@mui/material'
import React, {useEffect, useState } from 'react'
import { styled } from 'styled-components'
import mom2 from '../assets/mom2.jpg';


const Form = ({obj}) => {
  const [day,setDay]=useState("")
  const [month,setMonth]=useState("")
  const [validateDay, setValidateDay] =useState(null)
  const [state,setState]=useState(false)
  console.log(validateDay);
  const changeInput=(e)=>{
    console.log(e.target.value);
    setDay(e.target.value)
  }
  const monthInput=(e)=>{
    console.log(e.target.value);
    setMonth(e.target.value)
  }

  useEffect(()=>{
    if(day === "5" && month==="7" || day==="05" && month==="07"){
      setValidateDay(true)
    }
  },[day,month])

  const clickHandler=()=>{
    setState((prev)=>!prev)
    if(day === "5" && month==="7" || day==="05" && month==="07"){
      setValidateDay(true)
      obj.falseState()
    }else{
      setValidateDay(false)
    }
  }

  return (
    <FormStyle>
        <main>
          <img src={mom2} alt="" />
        </main>
        <RegistrText>Сайтка кируу учун апамдын туулган кун,айын туура толтуруу керек</RegistrText>

        <TextField
          fullWidth
          error
          id="outlined-error"
          label={"Туулган куну"}
          onChange={changeInput}
          />
        <TextField
          fullWidth
          error
          // id="outlined-error"
          label="Туулган айы"
          onChange={monthInput}
        />
        {validateDay===false ? <b style={{color: "red"}}> туура эмес!</b> : null}
          <Button onClick={clickHandler} variant="outlined" color="error">
              Кируу
          </Button>
    </FormStyle>
  )
}

export default Form

const FormStyle = styled.form`
    width: 40%;
    padding: 50px;
    box-shadow: 0px 0px 26px 10px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    border-radius: 20px;
    margin-top: 50px;
    /* background: rgba(59, 249, 6, 0.15); */

    & img{
      width: 100px;
      height: 130px;
      border-radius: 20px;
    }
    div{
      /* box-shadow: 0px 0px 10px 0.80px;
      padding: 8px; */
      font-size: 20px;
      font-weight: 600;
      /* color: yellow; */
    }
    input{
    }
    button{
      /* background-color: ; */
      border: 2px solid red;
      font-weight: 700;
    }
    button:hover{
      /* border: 2px solid red; */
      color: green;
    }
    
`
const RegistrText = styled.h4`
  color: yellow;
`