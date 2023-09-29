import styles from "../../Styles/Signup.module.css"
import { useNavigate } from "react-router-dom"
import LoginSign from '../LoginSign'
import { useAuth } from "../../Hooks/useAuth"
import Input from "../Input"
import Button from "../Button"
export default function SignUp() {
  const { setLogin }=useAuth()
  const navigate=useNavigate()
  const loginhandle=()=>{
    setLogin(true)
    navigate("/")
 }
  return (
    <div className={styles.sign}><LoginSign pgtitale="SignUp" foruser="I am user! " routeUser=" Login" forlink="/login">
      
      <Input forinput="email" tage="Email:" type="email" id="email" name="email"/>
      <Input forinput="password" tage="password" type="password" id="password" name="password"/>
      <Input forinput="cpassword" tage="Confirm password" type="password" id="cpassword" name="cpassword"/>
      <Button onClick={loginhandle} >Sign Up</Button>
      </LoginSign>
      
      </div>
  )
}
