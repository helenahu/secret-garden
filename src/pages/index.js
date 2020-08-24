import React,{useRef} from "react"
import '../styles/index.css'
import Header from "../components/header"
import Landing from "../components/Landing"
import About from "../components/about"
import Portfolio from "../components/portfolio"

export default function IndexPage() {
  const aboutRef = useRef(1);
  const worksRef = useRef(1);
  return (
    <div className='MainDiv'>
    <Header scrollAbout={aboutRef} scrollWorks={worksRef}></Header>
    <Landing></Landing>
    <About refProp={aboutRef}></About>
    <Portfolio refProp={worksRef}></Portfolio>
  </div>
  );
}


