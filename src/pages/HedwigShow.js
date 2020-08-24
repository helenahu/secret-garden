import React, {useState} from 'react';
import '../styles/show.css';
import Header from '../components/header'
import {useSpring, animated} from 'react-spring'
import BuyerLogo from '../images/Hedwig-img/BuyerLogo.svg'
import ShowVendors from '../components/HedwigShow/ShowVendors';
import ShowBuyers from '../components/HedwigShow/ShowBuyers';

const interpSmall = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function HedwigShow() {
    const {radians} = useSpring({
        to: async next=>{
            while (1) await next({radians: 2 * Math.PI})
        },
        from: {radians: 0},
        config: {duration: 3500},
        reset: true,
    })
    // if side is 0, viewing buyers' mock. else, viewing vendors' mock.
    const [side, setSide] = useState("buyers");
  return (
    <div>
        <Header/>
        <div id="MainDiv">
        <div id="ShowTitleDiv">
        <img src={BuyerLogo} style={{width:"10vw" }}/>
        <h1>Hedwig</h1>
        <h3>An online food ordering & pickup platform for Rice community.</h3>
        <h4> Vendors hosted: Rice Housing & Dining, Rice Coffee House, East West Tea, Hook.
        <br/>Acknowledgement: RiceApp Hedwig Team & OSA 2020 Hedwig Team</h4>
        

        <div className='selection-bar'>
            <h3 id='selection-buyers' className={`${(side =='buyers')? "bar-selected" : "bar-unselected"}`} onClick={()=>
                setSide("buyers")
            }>Buyers</h3>
            <h3 id='selection-vendors' className={`${(side =='vendors')? "bar-selected" : "bar-unselected"}`} onClick={()=>
                setSide("vendors")
            }>Vendors</h3>
        </div>
        {(side=="vendors") &&  <ShowVendors/>}
        {(side=="buyers") && <ShowBuyers/>}
        
        </div>
    </div>
    </div>
  );
}
