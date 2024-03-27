import React from "react";
import "../../components/testimony1/testimony1.css";
import Button from "../button/Button";
import testimonyPic from "../../images/testimony/testimonials2.jpeg";
import CustomerPic from "../../images/testimony/CustomerPic.png";
import userStory from "../../images/testimony/userStory.jpg";
import customer from "../../images/testimony/customer.jpg";

const Testimony1 = () => (
  <div className="testimony">
    <div className="testimonyContainer">
      <h1>User's Story</h1>
      <div className="client">
        <img className="clientImage" src={customer} alt="Customer" />
        <h3>Andrew Bowerbank</h3>
        <h4>CEO of Cetana Group</h4>
      </div>
      <div className="testimonyText">
        <p>
          "We are thrilled with our partnership with Collegium. <br />
          <br />
          Traditional approaches to Design & Construction fail to deliver on
          cost, schedule, and sustainability. Cetana needs to deliver on all
          three for our Mass Timber, Net-Zero Carbon developments to be
          successful. That’s why we use Collegium.”
        </p>
      </div>
    </div>
    <div className="testimonyImageContainer">
      <img className="testimonyImage" src={userStory} alt="Project" />
    </div>
  </div>
);

export default Testimony1;
