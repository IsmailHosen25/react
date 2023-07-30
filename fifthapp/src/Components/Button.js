import { Link } from "react-router-dom"
export default function  Button({children,link,classfors, ...rest}){
return <>
          <button {...rest} >
            <Link to={link} className={`${classfors}`}>{children}</Link>
         </button>
</>
}