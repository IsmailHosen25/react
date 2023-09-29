import { createContext, useState } from "react";
export const useLoginAuth=createContext({})
export const Authprovider=({children})=>{
    const [login,setLogin]=useState(false)
    return <useLoginAuth.Provider value={{login,setLogin}}>{children}</useLoginAuth.Provider>
}