import styled from "styled-components"
export const P=styled.p`
font-size:${(props)=>props.fontSize};
padding: 0.5rem 1rem;
color:${(props)=>props.color};
`
export const H1=styled.h1`
color:${(props)=> props.color};
font-size: ${(props)=>props.fontSize};
`
export const Li=styled.li`
width: 100%;
list-style: none;
padding:1rem 0rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
&::after{
    content: "";
    width: 1.8rem;
    border: 1px solid black;
    position: absolute;
    top:100%;
    left: 38%;
}
&:hover::after{
border:1px solid #4DD3CC;
}
&:hover .link{
color: #4DD3CC;
}
.link{
    font-size: 1.7rem;
    text-decoration: none;
    color:black;
}
`
export const A=styled.div`
  color:${(props)=>props.color};
  background-color: ${(props)=>props.bgc};
  font-size:1.5rem;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
`
