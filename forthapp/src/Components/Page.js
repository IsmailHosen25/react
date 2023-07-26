import React from 'react'
import{PageDiv} from "../Styled components/page.style"
import ComA from './ComA'
import ComB from './ComB'
export default function Page() {
  return (
    <PageDiv>
      <ComA/>
      <ComB/>
    </PageDiv>
  )
}
