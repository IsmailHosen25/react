import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {useComNameConsumer} from './hooks/useComNameContext'
export default function Nav() {
  const {name}=useComNameConsumer()
  return (
    <Navigation>

     <NavIn>
           <Logo>
            {name}
            {/* Impact<span style={{color:"#F96F59"}}>.</span> */}
           </Logo>
           <Manu>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/services">Services</Link></li>
                <li><Link className='link' to="/contect">Contect</Link></li>
           </Manu>
           <Togglemanu>
               <i class="fa-solid fa-bars"></i>
           </Togglemanu>

     </NavIn>

    </Navigation>
  )
}
const Navigation=styled.div`
padding:0.5rem 1rem;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
background-color:#008374;
position:fixed;
overflow:hidden;
`
const NavIn=styled.div`
width: 90%;
display: flex;
justify-content:space-between;
align-items: center;
`
const Logo=styled.div`
font-size: 3rem;
color:white;
cursor: pointer;
@media (max-width: 570px){
   font-size: 2.5rem;
}
`
const Manu=styled.ul`
width: 40%;
display: flex;
justify-content:space-between;
align-items:center;
list-style: none;
@media (max-width:1080px){
  width: 60%;
}
@media (max-width: 570px){
   display:none;
}
.link{
    font-size:2rem;
    text-decoration:none;
    color:#99CDC7;
    transition:color 0.2s linear;
    position: relative;
    &::after{
    content:'';
    width: 0%;
    position: absolute;
    top: 100%;
    left: 0px;
    border: 0px solid #F96F59;
    transition: all 0.2s linear;
    }
    &:hover{
        color:#fff;
        transition:color 0.2s linear;
    }
    &:hover::after{
        width: 100%;
        border: 1px solid #F96F59;
    }
}
`
const Togglemanu=styled.div`
display: none;
justify-content: center;
align-items: center;
color:white;
font-size: 2rem;
@media (max-width: 570px){
   display:flex;
}
`