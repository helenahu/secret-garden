import { Link } from "gatsby";
import React, {useRef} from "react";
import "../styles/header.css";
import Logo from "../images/Logo.svg";


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export default function Header(props) {
  const aboutRef = props.scrollAbout;
  const worksRef = props.scrollWorks;
  return (
  <div id='HeadBar'>
  <div className='personal-logo'>
    <Link to="/">
      <img src={Logo} id='logo'/>
    </Link>
  </div>
  <div className='Container'>
    <div><Link to="/">Home</Link></div>
    <div> <Link><div onClick={() => scrollToRef(aboutRef)}>About Me</div></Link> </div>
    <div> <Link><div onClick={() => scrollToRef(worksRef)}>My Works</div></Link> </div>
  </div>  
</div>
  );
}


