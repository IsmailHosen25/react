import React from 'react'
import styled from "styled-components"
import { H1, P,A } from '../Styled components/elemaint.style'
export default function Photo() {
  return (
    <MainDiv>
        <P color="white" fontSize="1.8rem">July 26, 2023</P>
        <H1 color="white" fontSize="3rem">Photo of The Day</H1>
        <A color="white"><i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> MORE DEtAILES</A>
    </MainDiv>
  )
}
const MainDiv=styled.div`
background-image:url("/images/sea.jpg");
background-repeat:no-repeat;
background-size:cover;
padding: 2rem 1rem;
width: 32%;
height: 27rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`