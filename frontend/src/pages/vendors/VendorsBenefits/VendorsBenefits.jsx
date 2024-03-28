import React from "react";
import "./vendorsBenefits.css";
import { useState } from "react";

import vendor1 from "../../../images/vendors/vendor1.jpg";
import vendor2 from "../../../images/vendors/vendor2.jpg";
import vendor3 from "../../../images/vendors/vendor3.jpg";

const VendorsBenefits = () => {
  const BenefitsContainer = ({ imageUrl, label, description, func }) => (
    <div className="vendorBenefitsContainer">
      <div
        className="vendorImageContainer"
        alt={label}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={func}
      >
        <div className="vendorImage-label">{label}</div>
      </div>
      <p onClick={func}>{description}</p>
    </div>
  );

  const CardOnePopoutWindow = ({ onClose }) => {
    return (
      <div className="vendorPopout-overlay">
        <div className="vendorPopout-content">
          <h2>Cost Optimization</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? <br />
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
            <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur?
          </p>
          <div className="vendorPopout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const CardTwoPopoutWindow = ({ onClose }) => {
    return (
      <div className="vendorPopout-overlay">
        <div className="vendorPopout-content">
          <h2>Streamlined Scheduling</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? <br />
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
            <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur?
          </p>
          <div className="vendorPopout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const CardThreePopoutWindow = ({ onClose }) => {
    return (
      <div className="vendorPopout-overlay">
        <div className="vendorPopout-content">
          <h2>Proactive Risk Mitigation</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? <br />
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
            <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur?
          </p>
          <div className="vendorPopout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const [isPopoutOneVisible, setIsPopoutOneVisible] = useState(false);
  const [isPopoutTwoVisible, setIsPopoutTwoVisible] = useState(false);
  const [isPopoutThreeVisible, setIsPopoutThreeVisible] = useState(false);

  const togglePopoutOne = () => {
    setIsPopoutOneVisible(!isPopoutOneVisible);
  };
  const togglePopoutTwo = () => {
    setIsPopoutTwoVisible(!isPopoutTwoVisible);
  };
  const togglePopoutThree = () => {
    setIsPopoutThreeVisible(!isPopoutThreeVisible);
  };
  return (
    <div className="vendor-benefits-Page">
      <div className="vendor-benefits-cards">
        <BenefitsContainer
          imageUrl={vendor1}
          label="Cost Optimization"
          description="Implementing strategic measures to optimize costs, unlocking new avenues for financial efficiency and resource utilization."
          func={togglePopoutOne}
        />
        <BenefitsContainer
          imageUrl={vendor2}
          label="Streamlined Scheduling"
          description="Accelerating project timelines, streamlining scheduling processes, and ensuring resource optimization."
          func={togglePopoutTwo}
        />
        <BenefitsContainer
          imageUrl={vendor3}
          label="Proactive Risk Mitigation"
          description="Mitigating potential risks safeguarding your projects and
        ensuring a smoother development process"
          func={togglePopoutThree}
        />
      </div>
      <div>
        {isPopoutOneVisible && (
          <CardOnePopoutWindow onClose={togglePopoutOne} />
        )}
      </div>
      <div>
        {isPopoutTwoVisible && (
          <CardTwoPopoutWindow onClose={togglePopoutTwo} />
        )}
      </div>
      <div>
        {isPopoutThreeVisible && (
          <CardThreePopoutWindow onClose={togglePopoutThree} />
        )}
      </div>
    </div>
  );
};

export default VendorsBenefits;
