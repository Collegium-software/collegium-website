import React from "react";
import "../../components/testimony1/testimony1.css";
import Button from "../button/Button";
// import testimonyPic from "../../images/testimony/testimonials2.jpeg";
// import CustomerPic from "../../images/testimony/CustomerPic.png";

const Testimony1 = () => (
  <div className="testimony">
    <div className="testimonyContainer">
      <h1>Customer Story</h1>
      <div className="client">
        <img className="clientImage" src={"CustomerPic"} alt="Customer" />
        <h3>Alan Main</h3>
        <h4>CEO of “Calgary Construction Co"</h4>
      </div>
      <div className="testimonyText">
        <p>
          From the very first meeting, the team at Collegium embraced my vision
          with enthusiasm. Their collaborative spirit turned my ideas into
          detailed plans, weaving innovation and functionality into every aspect
          of the project.
        </p>
        <div className="testimonyButton">
          <Button label="Read More" />
        </div>
      </div>
    </div>
    <div className="testimonyImageContainer">
      <img className="testimonyImage" src={"testimonyPic"} alt="Project" />
    </div>
  </div>
);

export default Testimony1;
