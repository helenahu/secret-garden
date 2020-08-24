import React from 'react';
import BasicInfo from '../../images/Hedwig-img/vendors-img/basic-info.gif'
import ClosedOrders from '../../images/Hedwig-img/vendors-img/closed-orders.gif'
import InSc from '../../images/Hedwig-img/vendors-img/individually-scrollable.gif'
import InSc2 from '../../images/Hedwig-img/vendors-img/individually-scrollable2.gif'
import InSc3 from '../../images/Hedwig-img/vendors-img/individually-scrollable3.gif'
import MenuItems from '../../images/Hedwig-img/vendors-img/menu-items.gif'
import MenuModifiers from '../../images/Hedwig-img/vendors-img/menu-modifiers.gif'
import OrderProcessing from '../../images/Hedwig-img/vendors-img/order-processing.gif'
import StoreHours from '../../images/Hedwig-img/vendors-img/store-hours.gif'
import viewPerson from '../../images/Hedwig-img/vendors-img/view-person.gif'

export default function ShowVendors() {
  return (
    <div id="ShowContentDiv" >

        <div id="InSc">
        <p className="description">Individually Scrollable Columns for Order Processing
            <p style={{height:"1em"}}>When processing orders, vendors can view orders according to their status: <span style={{color:"#EA907A", fontWeight:"bold"}}>"New"</span>, <span style={{color:"#FBC687", fontWeight:"bold"}}>"Accepted"</span>,  <span style={{color:"#AACDBE", fontWeight:"bold"}}>"Ready"</span>, and  <span style={{color:"Black", fontWeight:"bold"}}>"Closed"</span>. 
            Lists are individually scrollable so operations can be made seperately and precisely.</p>
                </p>
            <div id="InScImg">
                <img src={InSc}/>
                <img src={InSc2}/>
                <img src={InSc3}/> 
            </div>        
        </div>

        <div id="OrderProcessing">
            <img src={OrderProcessing} />
            <p className="description">Order Processing
                <p>Vendors can process orders without concerns of charging customers twice by mistake.
                <br/>Differnt payment methods requires different actions. Supported payments are "Credit Card" and "Tetra."</p>
            </p>
        </div>

        <div id="ViewPerson">
            <p className="description">Customers' Contact Info
                <p>Vendors can view detailed customers' contact methods if necessary.
                </p>
            </p>
            <img src={viewPerson} />
        </div>

        <div id="ClosedOrders">
            <img src={ClosedOrders} />
            <p className="description">View Closed Orders
                <p>Closed Orders are displayed according to Pickup Time.
                <br/>Further "sorting" and "filtering" function would be added in the next stage.
                </p>
            </p>
        </div>

        <div id="BasicInfo">
            <p className="description">Set Store's Basic Info
                <p>Vendors can set stores' basic information, ASAP pickup time, pickup instructions, and upload photos.
                </p>
            </p>
            <img src={BasicInfo} />
        </div>

        <div id="StoreHours">
            <img src={StoreHours} />
            <p className="description">Set Operation Hours
                <p>Vendors will have a weekly view of operation hours. 
                <br/>Operation status would either be set here, or toggled on the top-left corner if the store needs to be closed in unpredictable circumstances.
                </p>
            </p>
        </div>

        <div id="MenuItems">
            <p className="description">Set Menu Availability
                <p>Menu Data would be sent from Square api, and vendors can toggle the availability information here.
                <br/>This is also a portal to update product images.
                </p>
            </p>
            <img src={MenuItems} />
        </div>

        <div id="MenuModifiers">
            <img src={MenuModifiers} />
            <p className="description">Set Modifiers
                <p>Vendors can update modifiers' information instantly.
                </p>
            </p>
        </div>

    </div>
  );
}
