import React from "react"
import "../styles/Landing.css"
import Bio from "../images/Bio-pic.svg"
import Icon_linkedin from "../images/Icon-linkedin.svg"
import Icon_github from "../images/Icon-github.svg"
import Rose from "../images/rose.svg"
const Landing = ({ siteTitle }) => (
<div id="description-row">
    <div id="link-bio-wrap">
        <div id="quick-links">
            <a href="https://www.linkedin.com/in/yaning-hu-b1301a174/">
                <img src={Icon_linkedin} class="link-icons"/>
            </a>
            <a href="https://github.com/helenahu">
                <img src={Icon_github} class="link-icons"/>
            </a>
            
        </div>
    <img src={Bio} id="bio-pic"/>
    </div>

<div>
    <div id="description">Hi I’m Helena,<br/>a “Rice Owl” passionate about design & development. <br/>Welcome to my Secret Garden!</div>
    <div className="flex-container">
        <img src={Rose} width='30%'/>
    </div>
</div>
</div>
)


export default Landing
