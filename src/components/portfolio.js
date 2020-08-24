import React from 'react';
import "../styles/portfolio.css";
import HedwigBuyerPic from "../images/Hedwig-buyer-pic.svg"
import HedwigVendorPic from "../images/Hedwig-vendor-pic.svg"
import CarpoolPic from "../images/Carpool-pic.svg"
import { Link } from "gatsby";
export default function Portfolio() {
  return (
    <div className="PortfolioDiv">
        <div id="recent-projects">-RECENT PROJECTS</div>
        {/* Hedwig */}
        <div className="project">
            <div className="project-text">
                <h1 className="project-title">Hedwig</h1>
                <p className="project-description">An innovative ordering service helping Rice businesses and students.</p>
                <div className="project-tags">
                    <ul>
                        <li>UI/UX</li>
                        <li>Design System</li>
                        <li>Frontend</li>
                        <li>Customer & Businesses Mock Up</li>
                    </ul>
                </div>
                <Link className="view-link" to="/HedwigShow/"> View</Link>
            </div>
            <div id="hedwig-pics" className="project-img-right" >
                <Link className="img-links" className="hedwig-links" to="/HedwigShow/">
                    <img src={HedwigBuyerPic} className="project-img" id="buyer" width="45%"/>
                </Link>
                <Link className="img-links" className="hedwig-links" to="/HedwigShow/">
                    <img src={HedwigVendorPic} className="project-img" id="vendor" width="45%"/>
                </Link>
            </div>
            


            
        </div>
        {/* Carpool Project */}
        <div className="project">
            <div id="carpool-pics" className="project-img-left" >
                <Link className="img-links" className="hedwig-links" to="/carpoolShow/">
                    <img src={CarpoolPic} className="project-img" width="90%"/>
                </Link>
            </div>
                <div className="project-text">
                    <h1 className="project-title">Carpool</h1>
                    <p className="project-description">A carpooling app that makes trips much easer for Rice Students.</p>
                    <div className="project-tags">
                        <ul>
                            <li>UI/UX</li>
                            <li>Redesign</li>
                            <li>Debut</li>
                        </ul>
                    </div>
                    <Link className="view-link" to="/carpoolShow/"> View</Link>
                   
                </div>
                
            </div>

    </div>
  );
}
