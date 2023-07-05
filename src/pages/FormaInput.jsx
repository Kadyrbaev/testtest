import React, { useState } from 'react'
import { styled } from 'styled-components'

const FormaInput = (props) => {
    const [text, setText]=useState("")
    const [value, setValue]=useState("")
    function areaChange(e){
        setText(e.target.value)
    }
    function nameChange(e){
        setValue(e.target.value)
    }

    function addData(){
        const obj = {
            text: text,
            value,
            id: Math.random().toString()
        }
        props.ongetForm(obj)
    }
  return (
    <Cont>
        <h1>Куттуктоо жазуу</h1>
        <TextArea onChange={areaChange} placeholder='Куттуктоо жазуу' name="" id="" cols="30" rows="10"></TextArea>
        <div>
            <input onChange={nameChange} type="text" placeholder='Атыныз'/>
            <button onClick={addData}>Кетируу</button>
        </div>
    </Cont>
  )
}

export default FormaInput

const Cont = styled.div`
    display: flex;
    box-shadow: 0px 0px 12px 0.90px;
    padding: 0px 30px 30px 30px;
    flex-direction: column;
    width: 500px;
    margin: auto;
    align-items: center;
    background: rgba(59, 249, 6, 0.15); 
    h1{
        color: #ff00e1;
    }
    input{
        outline: none;
        width: 400px;
        padding: 8px;
        margin-top: 14px;
    }
    button{
        padding: 6px;
    }
    div{
        /* display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid red; */
    }
`
const TextArea = styled.textarea`
    width: 500px;
    outline: none;
    border-radius: 8px;
    padding: 10px;
    /* height: 50px; */
`