import React from 'react'
import {Containerdiv,CustomContainer3} from "../Styled components/Container.style"
import Photo from './Photo'
import Mid from './Mid'
export default function ComB() {
  return (
    <Containerdiv>

        <CustomContainer3 width="100%" display="flex" jstc="space-between" algni="center"> 
              
          <Photo/>
          <Mid />
        </CustomContainer3>


    </Containerdiv>

  )
}
