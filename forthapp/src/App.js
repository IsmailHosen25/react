import React from 'react';
import './App.css';
import Footer from './Footer';
import Layout from './Layout';
import Nav from './Nav';
import ComNameProvider from "./context/ComNameContext";
function App() {
  return (
    <ComNameProvider>
      <div className="App">
      <div className='tacknav'>
      <Nav/>
      </div>
      <div className='layout'>
      <Layout/>
      </div>
      <Footer/>
    </div>
    </ComNameProvider>
  );
}

export default App;
