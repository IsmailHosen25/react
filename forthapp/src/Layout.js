import React from 'react'
import  styled from 'styled-components'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contect from "./Components/Contect"
import Four404 from './Four404'
export default function Layout() {
  return (
    <Layouts>


<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Services' element={<Service/>}/>
    <Route path='/contect' element={<Contect/>}/>
    <Route path='*' element={<Four404/>}/>
</Routes>


    </Layouts>
  )
}
const Layouts=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;
overflow: hidden;
`
