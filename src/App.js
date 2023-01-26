import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Section2 from './Components/Section2';
import Footer from './Components/Footer';
import Filter from './Components/Filter';
import Datos from './Components/Datos';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <Section2/><div className='container'></div>
      
      
      <Footer/>
      
    </div>
  );
}

export default App;
