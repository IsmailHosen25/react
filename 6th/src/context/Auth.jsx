import React,{useState,createContext} from 'react'
const Auth =createContext({})
export function Authprovider({children}) {
    const [logedin, setlogedin]=useState(false)
  return (
    <Auth.Provider value={{logedin,setlogedin}}>
        {children}
    </Auth.Provider>
  )
}
export default Auth
