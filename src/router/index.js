import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registr from '../pages/Registr'
import Main from '../pages/Main'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Registr/>} />
        <Route path='main' element={<Main/>}/>
    </Routes>
  )
}

export default MainRoutes
