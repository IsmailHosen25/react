import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './hook/useAuth'
export default function Protected({Component}) {
    const navigate=useNavigate()
    const {logedin, setlogedin}=useAuth()
    useEffect(()=>{
        if(!logedin){

            navigate("/login")

        }
    },[logedin])
  return (
    <div>
    <Component/>
    </div>
  )
}
