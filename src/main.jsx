import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HerosPage from './pages/Home';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <HerosPage/>
      <AboutPage/>
      <SkillsPage/>
      <Portfolio/>
      <Footer/>
    </React.StrictMode>
)
