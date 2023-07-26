import React from 'react'
import { Link } from 'react-router-dom'
import { NavContainer,Logo,Manu,SocialMedia,Socialicon } from '../Styled components/Nav.style'
import {P,Li} from "../Styled components/elemaint.style"
export default function Nav() {
    const manulist= ["About","Discussion","Recent Posts","Archieve","Team","Eco Story","Contect"]
  return (
    <NavContainer>
      <Logo>
        <P color="#4DD3CC" fontSize="2.8rem">WaterWhy</P>
      </Logo>
      <Manu>
        {manulist.map((item)=><Li><Link className='link'>{item}</Link></Li>)}
      </Manu>
      <SocialMedia>
        <Socialicon><i class="fa-brands fa-instagram"></i></Socialicon>
        <Socialicon><i class="fa-brands fa-twitter"></i></Socialicon>
        <Socialicon><i class="fa-brands fa-facebook"></i></Socialicon>
      </SocialMedia>

    </NavContainer>
  )
}
