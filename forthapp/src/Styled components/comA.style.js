import styled from "styled-components"
export const MainDiv=styled.div`
width: 100%;
background-image:url("images/home.jpg");
background-repeat:no-repeat;
background-size:cover;
display: flex;
flex-direction:column;
justify-content: flex-end;
align-items: flex-start;
border: 5px solid #58DDE5;
`
export const InnerDiv=styled.div`
width: 80%;
margin-left: 8rem;
margin-top:15rem;
margin-bottom:20rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 2rem;
`
export const Top=styled.div`
width: 100%;
`
export const Btn=styled.div`
display: flex;
justify-content: flex-start;
align-items:center;
gap: 1rem;
`
export const Bottom=styled.div`
width: 100%;
display: flex;
`
export const Left=styled.div`
width: 10%;
`
export const Right=styled.div`
width:70%;
`