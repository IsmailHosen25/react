import React from 'react';
import './App.css';
import { Containerdiv,CustomContainer1,CustomContainer2,InnerContainer} from './Styled components/Container.style';
import Page from './Components/Page';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
function App() {
  return (
     <>
     <Containerdiv>

      <InnerContainer  width="100%" display="flex" flexDir="row" jstc="center" algni="flex-start">

        <CustomContainer1 width="17%" height=" 100%" display="flex" jstc="center" algni='center'> 
          <Nav/>
        </CustomContainer1>

        <CustomContainer2 width="83%" height=" 100%">
          <Page/>
          <Footer/>
        </CustomContainer2>

       </InnerContainer>

     </Containerdiv>
     </>
  );
}

export default App;
