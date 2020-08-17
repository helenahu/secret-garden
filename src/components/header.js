import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
import Logo from "../images/Logo.svg"
const Header = ({ siteTitle }) => (
<div className='HeadBar'>
  <div className='personal-logo'>
    <Link to="/">
      <img src={Logo} id='logo'/>
    </Link>
  </div>
  <div className='Container'>
    <div><Link to="/">Home</Link></div>
    <div>  <Link to="/about-me/">About Me</Link></div>
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
