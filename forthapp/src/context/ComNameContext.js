import{createContext} from "react";
export const ComNameContext=createContext({})
const ComNameProvider=({children})=>{
    const name="Impact."

  return <ComNameContext.Provider value={{name}}>{children}</ComNameContext.Provider>
}
export default ComNameProvider;