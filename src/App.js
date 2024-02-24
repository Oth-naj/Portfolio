import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/intro/Home";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { themeContext } from './context';
import { useContext } from 'react';



function App() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{background: darkMode? 'black' : '', 
      color: darkMode? 'white' : ''
    }}
    >
      <Navbar/>
      <Home/>
      <Skills/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
