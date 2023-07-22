import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (


   <FooterDiv>
    <Upp>
       <div className='impact'>
        <h2>Impact</h2>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div className='social_media'>
                <div><i class="fa-brands fa-twitter"></i></div>
                <div><i class="fa-brands fa-facebook"></i></div>
                <div><i class="fa-brands fa-instagram"></i></div>
                <div><i class="fa-brands fa-linkedin"></i></div>
        </div>
       </div>
       <div className='usefullink'>
           <h2>Useful link</h2>
           <div>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/services">Services</Link>
                <Link className='link' to="/contect">Contect</Link>
           </div>
       </div>
       <div className='services'>
       <h2>Our services</h2>
           <div>
                <Link className='link' to="">Web Design</Link>
                <Link className='link' to="">Web Development</Link>
                <Link className='link' to="">Product Management</Link>
                <Link className='link' to="">Marketing</Link>
                <Link className='link' to="">Graphic Design</Link>
           </div>
       </div>
       <div className='contect'>
            <h2>Contect Us</h2>
            <div>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
            </div>
            <div>
                <p><b>Phone:</b> +1 5589 55488 55</p>
                <p><b>Email:</b> info@example.com</p>
            </div>
       </div>
    </Upp>
    <Down>
        <div>
            <p>© Copyright Impact. Rights Reserved</p>
            <p>Designed by Hasan</p>
        </div>
    </Down>
   </FooterDiv>

  )
}
const FooterDiv=styled.div`
     padding: 2rem 0rem;
     width: 100%;
     display: flex;
     flex-direction:column;
     justify-content: center;
     align-items: center;
     background-color:#008374;
`
const Upp=styled.div`
padding: 2rem 1rem;
width: 90%;
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap:wrap;
gap:3rem;
.impact{
    width: 23%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    h2{
        color:#fff;
        font-size: 3rem;
        cursor: pointer;
    }
    p{
        color:#fff;
        font-size: 1.5rem;
    }
    .social_media{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        align-items: center;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            color:#fff;
            font-size:2rem;
            border: 2px solid #fff;
            border-radius:25%;
            cursor: pointer;
            transition:border-radius 0.2s linear;
            &:hover{
                border-radius:50%;
            }
            @media (max-width: 420px){
                font-size:1.7rem;
             }
            
            }
    }
    @media (max-width: 1080px){
          width:40%;
        }
        @media (max-width: 420px){
          width:100%;
        }
}
.usefullink{
    width: 23%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    h2{
        font-size: 2.5rem;
        color:#fff;
    }
    div{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        font-size:1.5rem;
        .link{
    font-size:2rem;
    text-decoration:none;
    color:#99CDC7;
    transition:color 0.2s linear;
    position: relative;
    &:hover{
        color:#fff;
        transition:color 0.2s linear;
          }
      }
    }
    @media (max-width: 1080px){
      width:40%;
    }
    @media (max-width: 420px){
          width:100%;
        }
}
.services{
    width: 23%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    h2{
        font-size: 2.5rem;
        color:#fff;
    }
    div{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        font-size:1.5rem;
        .link{
    font-size:2rem;
    text-decoration:none;
    color:#99CDC7;
    transition:color 0.2s linear;
    position: relative;
    &:hover{
        color:#fff;
        transition:color 0.2s linear;
          }
      }
    }
    @media (max-width: 1080px){
     width:40%;
    }
    @media (max-width: 420px){
          width:100%;
        }
}
.contect{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:2rem;
    h2{
        color:#fff;
        font-size: 2.5rem;
    }
    div{
       p{
        color:#FFFBF6;
        font-size: 1.5rem;
       }
    }
    @media (max-width: 1080px){
     width:40%;
    }
    @media (max-width: 420px){
          width:100%;
        }

}
`
const Down=styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
div{
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
}
p{
    color: #fff;
    font-size: 1.5rem;

}
@media (max-width: 420px){
    padding: 1.5rem 0.8rem;
        }
`
