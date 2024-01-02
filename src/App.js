import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Vedios from './components/Vedios.jsx';
import Upload from './components/Upload.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
function App() {
  
  return(
  
    <Router>
      <Header/>
         <Routes>
   
             <Route path='/home' element={<Home/>} /> 
             <Route path='/vedios' element={<Vedios/>} /> 
             <Route path='/upload' element={<Upload/>} /> 
             <Route path='/login' element={<Login/>} /> 
             <Route path='/signup' element={<SignUp/>} /> 
            
         </Routes>
         <Footer/>
    </Router>
  
  );

}

export default App;
