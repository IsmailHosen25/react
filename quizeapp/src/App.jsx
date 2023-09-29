import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Authprovider } from './Auth'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Layout from "./Components/Layout"
import Home from "./Components/Pages/Home"
import Login from "./Components/Pages/Login"
import SignUp from './Components/Pages/SignUp'
import Quiz from './Components/Pages/Quiz'
function App() {
  return (
    <>
<Authprovider>
    <Nav/>
     <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<SignUp/>}/>
        <Route path='/qize' element={<Quiz/>}/>
      </Routes>
     </Layout>
     <Footer/>
</Authprovider>
    </>
  )
}

export default App
