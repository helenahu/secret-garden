import React from 'react';
import "../styles/about.css"
import SwanTitle from "../images/swan-title.svg"
import Earth from "../images/earth.svg"
import {useSpring, animated} from 'react-spring'
import {Link} from 'gatsby'

const interpLarge = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
const interpSmall = i => r => `translate3d(0, ${5 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function About(props) {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return (
    <div id="mainDiv" ref={props.refProp}>
        <div id="titleDiv">
          <animated.img src={SwanTitle} width="100%" style={{ transform: radians.interpolate(interpSmall(0)) }} />
        </div>
        <div id="paragraphDiv">
            <p>Grown up in China but pursing my dream in the U.S, I feel both the Asian culture and the spirit of an ever-wondering explorer flowing in my vein.</p>
            <p>I envision myself to be a creative designer, a vigorous researcher, and a practical developer. I love getting inspired by different minds around the globe.</p>
            
            <div id="p_and_earth">
                <p>Edu: Undergraduate @ Rice University.
                  <br/>Major: Computer Science.
                  <br/>Age: 19.
                  <br/> 
                  <Link href="https://drive.google.com/file/d/16ImShBvXmuwBzTjhVp8-1d4sQBf9QjtW/view?usp=sharing">View Resume</Link>
                </p>
                <animated.img src={Earth} width="20%" style={{ transform: radians.interpolate(interpLarge(1)) }} />
                
            </div>
            
        </div>



    </div>
  );
}
