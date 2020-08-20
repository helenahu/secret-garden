import React from 'react';
import "../styles/portfolio.css";
import HedwigBuyerPic from "../images/Hedwig-buyer-pic.svg"
import HedwigVendorPic from "../images/Hedwig-vendor-pic.svg"
import CarpoolPic from "../images/Carpool-pic.svg"

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
                <button>View</button>
            </div>
            <div id="hedwig-pics" className="project-img-right" >
                <img src={HedwigBuyerPic} className="project-img" id="buyer" width="45%"/>
                <img src={HedwigVendorPic} className="project-img" id="vendor" width="45%"/>
            </div>
            


            
        </div>
        {/* Carpool Project */}
        <div className="project">
            <img src={CarpoolPic} className="project-img-left" className="project-img" width="45%"/>
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
                    <button>View</button>
                </div>
                
            </div>
        
    </div>
  );
}
