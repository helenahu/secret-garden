import React from 'react';
import BuyerError from '../../images/Hedwig-img/buyers-img/buyer-error.gif'
import BuyerLogin from '../../images/Hedwig-img/buyers-img/buyer-login.gif'
import BuyerOrders from '../../images/Hedwig-img/buyers-img/buyer-orders.gif'
import BuyerTime from '../../images/Hedwig-img/buyers-img/buyer-pickup-time.gif'
import PlaceOrder from '../../images/Hedwig-img/buyers-img/buyer-place-order.gif'
import ProfileOthers from '../../images/Hedwig-img/buyers-img/buyer-profile-others.gif'
import BuyerProfile from '../../images/Hedwig-img/buyers-img/buyer-profile.gif'
import BuyerStoreDetails from '../../images/Hedwig-img/buyers-img/buyer-store-details.gif'

export default function ShowBuyers() {
  return (
    <div id="ShowContentDiv" className="ShowMobileContentDiv">
        <div id="BuyerLogin">
            <img src={BuyerLogin} />
            <p className="description">Login
                <p>Rice Students can select to login as buyers through Rice NetID.
                <br/>Vendors would be redirected to the "Vendors" site.</p>
            </p>
        </div>

        <div id="BuyerTime">
            <p className="description">Set Pickup Time
                <p>Buyers can choose to setup pickup time at the time they check out, or when they want to browse opening vendors by the time they pick up.
                </p>
            </p>
            <img src={BuyerTime} />
        </div>

        <div id="PlaceOrder">
            <img src={PlaceOrder} />
            <p className="description">Place Orders
                <p>Select an opening vendor, browse their menu, select modifiers, and even apply coupons from Loyalty Points when available!
                <br/>Checkout methods are either credit card or Tetra (linked with student account). Shopify will take care of credit card information.</p>
            </p>
        </div>

        <div id="BuyerOrders">
            <p className="description">Manage Orders
                <p>Want to view Past and Upcoming orders? Cancel the order anytime before it shows "preparing."
                    <br/>Rate Past orders to let vendors improve overtime.
                </p>
            </p>
            <img src={BuyerOrders} />
        </div>

        <div id="BuyerStoreDetails">
            <img src={BuyerStoreDetails} />
            <p className="description">Get Store Details
                <p>Never go astray with this map and instruction provided from the vendors. </p>
            </p>
        </div>

        <div id="BuyerProfile">
            <p className="description">Personal Information
                <p>Let vendors reach out to you if necessary. Update personal contact anytime.
                </p>
            </p>
            <img src={BuyerProfile} />
        </div>

        <div id="ProfileOthers">
            <img src={ProfileOthers} />
            <p className="description">About & Help & Loyalty Points
                <p>On the profile page, you can find more information about Hedwig and each vendor, instructions on using this webiste, and your loyalty points that can be used to redempt free drinks!</p>
            </p>
        </div>

        <div id="BuyerError">
            <p className="description">Edge Cases Error Page
                <p>Too last minutes to place the order? Unexpected trouble emerged? These error pages help you handle this.
                </p>
            </p>
            <img src={BuyerError} />
        </div>

    </div>
  );
}
