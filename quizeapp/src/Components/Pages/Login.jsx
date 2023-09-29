import styles from "../../Styles/Login.module.css"
import LoginSign from "../LoginSign"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Hooks/useAuth"
import Input from "../Input"
import Button from "../Button"
export default function Login() {
  const {setLogin }=useAuth()
  const navigate=useNavigate()
  const loginhandle=()=>{
     setLogin(true)
     navigate("/")
  }
  
  return (
    <div className={styles.login}>
   
   <LoginSign pgtitale="Login" foruser="New user?" routeUser="SignUp" forlink="/sign">
         <Input forinput="fusername" tage="username:" type="text" id="fusername" name="fusername"/>
         <Input forinput="fpassword" tage="Password:" type="password" id="fpassword" name="fpassword"/>
         <Button onClick={loginhandle}>Login</Button>
   </LoginSign>

    </div>
  )
}
