import React from "react"
import "../styles/Landing.css"
import Bio from "../images/Bio-pic.svg"
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Rose from "../images/rose.svg";
const Landing = ({ siteTitle }) => (
<div id="description-row">
    <div id="link-bio-wrap">
        <div id="quick-links">
            <a href="mailto:yh74@rice.edu"  class="link-icons">
                <EmailIcon/>
            </a>
            <a href="https://www.linkedin.com/in/yaning-hu-b1301a174/" class="link-icons">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/helenahu"  class="link-icons">
                <GitHubIcon/>
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
