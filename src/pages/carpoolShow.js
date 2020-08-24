import React from 'react';
import '../styles/show.css';
import Logo from '../images/Carpool/CarpoolLogo.svg'
import FindRide from '../images/Carpool/Carpool-redesign-find.gif'
import NewRide from '../images/Carpool/Carpool-redesign-new.gif'
import WelcomeScreen from '../images/Carpool/Carpool-redesign-1.gif'
import EditProfile from '../images/Carpool/Carpool-redesign-edit-profile.gif'
import Header from '../components/header'
import {useSpring, animated} from 'react-spring'

const interpSmall = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function CarpoolShow() {
    const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
      })
  return (
    <div>
    <Header/>
    <div id="MainDiv">
        <div id="ShowTitleDiv">
            <animated.img src={Logo} width="70vh" style={{marginBottom:"1vw", width:"4vw", transform: radians.interpolate(interpSmall(1)) }}/>
            <h1>Carpool</h1>
            <h3>An innovative web making carpooling fast and convenient for Rice community.</h3>
            <h4>Acknowledgement: RiceApp Carpool Team & OSA 2020 Carpool Team</h4>
            <h4>NOTE: This website is already deployed. <span>You might need a NetID to LogIn</span></h4>
            <div className="visit-website"><a href="http://carpool.riceapps.org/"> Click Here To Visit</a>
        </div></div>
        <div id="ShowContentDiv">
            <div id="Welcome">
                <img src={WelcomeScreen} />
                <p className="description">Welcome & Profile
                    <p>After logging in with Rice NetID, users can vew their past & upcoming rides.</p>
                </p>
            </div>
            <div id="EditProfile">
                <p className="description">Edit User Profile
                    <p>Here is all the information your peers would need to share a great trip with you!</p>
                </p>
                    <img src={EditProfile} />
            </div>
            
            <div id="FindRide">
                <img src={FindRide} />
                <p className="description">Find Ride
                <p>Need to join an existing ride? No problem!
                    <br/>Select the right time and destination for yourself!
                    </p>
                </p>
            </div>
            <div id="NewRide">
                <p className="description">Create New Ride
                    <p>Just with a few click, either customize your location or select frequently visited places.
                        <br/>If you like, invite your friends and travel together!
                    </p>
                </p>
                <img src={NewRide} />
            </div>
        </div>
    </div>
    </div>
  );
}