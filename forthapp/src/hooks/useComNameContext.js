import{ useContext } from 'react'
import {ComNameContext} from '../context/ComNameContext'
export const useComNameConsumer=()=>{
    return useContext(ComNameContext);
}