import React from "react"
import { Link } from "gatsby"
import '../styles/index.css'
import SEO from "../components/seo"
import Header from "../components/header"
import Landing from "../components/Landing"

const IndexPage = () => (
  <div className='MainDiv'>
    <Header></Header>
    <SEO title="Home" />
    <Landing></Landing>
   
    </div>
   
)

export default IndexPage
