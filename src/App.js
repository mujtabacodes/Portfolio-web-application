import { useDispatch } from 'react-redux';
import React,{useState, useEffect} from 'react';


// ============import components ================
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
// =================== import getfunctions =================
import {getPortifolio} from './actions/portfolio'
import{getTestimonial} from './actions/testimonial'
// import {} from './actions/testimonial'

function App() {


  
  const [CurrentId, setCurrentId] = useState(0);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPortifolio());
    dispatch(getTestimonial());
    
  },[CurrentId,dispatch])



  return (
    <>
      <Home />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
