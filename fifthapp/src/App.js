import './App.css';
import Nav from "./Components/Nav";
import Layout from "./Components/Layout"
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About"
import Services from "./Components/Pages/Services";
import FourZeroFOur from "./Components/Pages/FourZeroFour"
import Work from './Components/Pages/Work';
function App() {
  return (
   <div className='app'>
   <Nav/>
   <Layout>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path='/work' element={<Work/>}/>
        <Route path="*" element={<FourZeroFOur/>}/>
    </Routes>
   </Layout>
   <Footer/>
   </div>
  );
}

export default App;
