import styled from "styled-components"

export const NavContainer=styled.div`
display: flex;
flex-direction:column;
gap: 2rem;
justify-content: center;
align-self: center;
`
export const Logo=styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
padding:3rem 0rem;
`
export const Manu=styled.div`
padding: 0rem 0.5rem 2rem 0.5rem;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 2rem;

`
export const SocialMedia=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
`
export const Socialicon=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
padding: 0.7rem;
border: 2px solid black;
border-radius:50%;
transition: all 0.3s linear;
&:hover{
    color:#4DD3CC;
    border-radius:10%;
    border-color:#4DD3CC;
}
`