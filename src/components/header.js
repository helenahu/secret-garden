import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import "../styles/header.css";
import Logo from "../images/Logo.svg";

// const [scrolledHeader, setScrolledHeader] = useState('scrolled');


  

//   useEffect(
//     () => {
//       const handleScroll = () => {
//         const scrolled = window.scrollY > 0;
//         if(scrolled){
//           setScrolledHeader("header-scrolled")
//         }
//         else{
//           setScrolledHeader("header-not-scrolled")
//         }
//       }
//       document.addEventListener("scroll",handleScroll)
//       return ()=>{
//         document.removeEventListener("scroll",handleScroll)
//       }
//     },[])
  
const Header = ({ siteTitle }) => (
<div id='HeadBar'>
  <div className='personal-logo'>
    <Link to="/">
      <img src={Logo} id='logo'/>
    </Link>
  </div>
  <div className='Container'>
    <div><Link to="/">Home</Link></div>
    <div>  <Link to="/#try">About Me</Link></div>
    <div>  <Link to="/my-works/">My Works</Link></div>
  </div>  
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
