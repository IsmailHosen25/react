import React from 'react'
import {MainDiv,Top,Bottom,InnerDiv,Btn,Left,Right} from "../Styled components/comA.style"
import { H1,A,P } from '../Styled components/elemaint.style'
export default function ComA() {
  return (
    <MainDiv>
        <InnerDiv>
        <Top>
            <Btn>
               <A color='white'bgc="#A0D4D9">Jul 26,2023</A>
               <A color='white'><i class="fa-regular fa-message"></i> 16 Replies</A>
            </Btn>
            <H1 color="white" fontSize="5rem">Who Owns the Rain?</H1>
        </Top>
        <Bottom>
            <Left></Left>
            <Right><P color='White' fontSize="1.8rem">"Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly."</P></Right>
        </Bottom>
        </InnerDiv>

    </MainDiv>
  )
}
