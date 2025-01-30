import { useState } from 'react';
import './App.css'
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';
import PostComponent from '../components/PostComponent';
function App() {
  return (
  
    <div className="App-container">
      <Sidebar/>
      <div className="content">
      <Header/>
      <PostComponent/>
      <Outlet/>
      <Footer/>
      </div>
     </div>
    
    )
}

export default App
