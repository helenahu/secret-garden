import React from "react"
import "../styles/Landing.css"
import Bio from "../images/Bio-pic.svg"
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useSpring, animated} from 'react-spring'
import Rose from "../images/rose.svg";
const interpSmall = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function Landing() {
    const { radians } = useSpring({
      to: async next => {
        while (1) await next({ radians: 2 * Math.PI })
      },
      from: { radians: 0 },
      config: { duration: 3500 },
      reset: true,
    })
return(
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
        <animated.img src={Rose} width="20%" style={{ transform: radians.interpolate(interpSmall(1)) }} />
    </div>
</div>
</div>

)}
