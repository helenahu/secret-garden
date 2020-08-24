import React,{useRef} from "react"
import '../styles/index.css'
import Header from "../components/header"
import Landing from "../components/Landing"
import About from "../components/about"
import Portfolio from "../components/portfolio"

export default function IndexPage() {
  const aboutRef = useRef(1);
  const worksRef = useRef(1);
  var Landed = 1;
  return (
    <div className='MainDiv'>
    <Header scrollAbout={aboutRef} scrollWorks={worksRef} onLanding={1}></Header>
    <Landing></Landing>
    <About refProp={aboutRef}></About>
    <Portfolio refProp={worksRef}></Portfolio>
  </div>
  );
}


