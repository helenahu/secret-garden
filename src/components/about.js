import React from 'react';
import "../styles/about.css"
import SwanTitle from "../images/swan-title.svg"
import Earth from "../images/earth.svg"
export default function About() {
  return (
    <div id="mainDiv">
        <div id="titleDiv">
            <img src={SwanTitle} width="100%" />
        </div>
        <div id="paragraphDiv">
            <p>Grown up in China but pursing my dream in the U.S, I feel both the Asian culture and the spirit of an ever-wondering explorer flowing in my vein.</p>
            <p>I envision myself to be a creative designer, a vigorous researcher, and a practical developer. I love getting inspired by different minds around the globe.</p>
            <div id="p_and_earth">
                <p>Edu: Undergraduate @ Rice University.
                <br/>Major: Computer Science.
                <br/>Graduation: Expected May 2023.</p>
                <img src={Earth} width="12%"/>
            </div>
            
        </div>



    </div>
  );
}
