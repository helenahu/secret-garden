import React from "react"
import { Link } from "gatsby"
import '../styles/index.css'
import Header from "../components/header"
import Landing from "../components/Landing"
import About from "../components/about"

const IndexPage = () => (
  <div className='MainDiv'>
    <Header></Header>
    <Landing></Landing>
    <About></About>
    </div>
   
)

export default IndexPage
