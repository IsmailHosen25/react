import { useContext } from "react";
import { useLoginAuth } from "../Auth";
export const useAuth=()=>{
    return useContext(useLoginAuth)
}