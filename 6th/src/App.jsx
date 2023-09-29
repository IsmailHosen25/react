import './App.css'
import {Routes,Route} from "react-router-dom"
import Protected from './Protected'
import Home from './Pages/Home/Home'
import Contect from './Pages/Contect/Contect'
import About from './Pages/About/About'
import Login from './Pages/Login&sign/Login'
import Sign from './Pages/Login&sign/Sign'
import Error from './Pages/Error'
import Nav from "./Pages/Nav/Nav"
import Profile from "./Pages/Profile/Profile"
import {Authprovider} from "./context/Auth"
function App() {

  return (
    <>
    <Authprovider>

     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Protected Component={About}/>}/>
      <Route path='/contect' element={<Protected Component={Contect}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/profile' element={<Protected Component={Profile}/>}/>
      <Route path='*' element ={<Error/>}/>
     </Routes>

     
     </Authprovider>
    </>
  )
}

export default App
