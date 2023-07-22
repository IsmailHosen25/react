import React from 'react'
import styled from "styled-components"
export default function Home() {
  return (
    <HomeDiv>
      <Upp>
        <div className='right'>
          <h1>Welcome to Impact</h1>
          <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div>
               
               <button className='btn1'>Get Started</button>
               <button className='btn2'><i class="fa-regular fa-circle-play"></i>  Watch Video</button>

          </div>
        </div>
        <div className='left'>
             <img src='/images/hero-img.svg' />
        </div>

      </Upp>
    </HomeDiv>
  )
}
const HomeDiv=styled.div`
width: 100%;
height: 120vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow:hidden;
`
const Upp=styled.div`
width: 100%;
padding: 0rem 9rem;
height: 120vh;
background-color:#008374;
display: flex;
justify-content: flex-start;
gap: 2rem;
align-items:center;
@media (max-width:790px) {
    padding: 0rem 6rem;
    flex-wrap:wrap-reverse;
    justify-content: center;
  }
  @media (max-width:420px) {
    padding: 0rem 2rem;
  }
.right{
  width: 50%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap:2rem;
  @media (max-width:790px) {
    width: 100%;
  }
  h1{
    font-size: 5rem;
    color:#fff;
    @media (max-width:790px) {
    font-size:3rem;
  }
  }
  p{
    font-size: 1.5rem;
    color: #fff;
  }
  div{
    
    .btn1{
      font-size: 1.9rem;
      border: none;
      padding:0.8rem 2rem;
      border-radius:20px;
      background-color: #1A9082;
      color:#fff;
    }
    .btn2{
      font-size: 1.9rem;
      border: none;
      padding:0.8rem 1.5rem;
      border-radius:20px;
      background-color: transparent;
      color:#fff;
    }
  }
}
.left{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:790px) {
    width: 80%;
  }
    img{
      width: 100%;
    }
  }
`