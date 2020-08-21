import React from "react"
import { Link } from "gatsby"
import '../styles/index.css'
import Header from "../components/header"
import Body from "../components/body"

const IndexPage = () => (
  <div className='MainDiv'>
    <Header></Header>
    <Body></Body>
    <div id="try">try this scroll?</div>
    </div>
   
)

export default IndexPage
