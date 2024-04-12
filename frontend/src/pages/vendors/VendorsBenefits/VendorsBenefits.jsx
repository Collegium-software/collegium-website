import React from "react";
import "./vendorsBenefits.css";
import { useState } from "react";

import vendor1 from "../../../images/vendors/vendor1.jpeg";
import vendor2 from "../../../images/vendors/vendor2.jpeg";
import vendor3 from "../../../images/vendors/vendor3.jpeg";

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
      <p onClick={func}>
        {description} <br />
        <span>Click to learn more</span>
      </p>
    </div>
  );

  const CardOnePopoutWindow = ({ onClose }) => {
    return (
      <div className="vendorPopout-overlay">
        <div className="vendorPopout-content">
          <h2>Supply Chain Integration</h2>
          <p>
            In today's construction industry, the limited digital integration
            for vendors, trades, and suppliers presents significant challenges
            and costs. This lack of seamless communication hinders businesses'
            access to crucial data directly from designers to supply chains,
            resulting in increased expenses and operational inefficiencies.
            Addressing these limitations is crucial to enhancing industry
            growth, competitiveness, and productivity. <br />
            <br />
            As the transition unfolds, Collegium emerges as a key player in
            driving change. Through its innovative solutions, Collegium aims to
            revolutionize workflow efficiency by providing vendors and trades
            with increased and ubiquitous access to data directly from digital
            models to the supply chain. By automating communication processes
            and enhancing visibility across the network, businesses can
            anticipate a smoother transition towards a more integrated and
            efficient system, laying the groundwork for future advancements.
            <br />
            <br />
            Looking ahead, the future promises a digital collaboration
            connection that seamlessly links all participants in the supply
            chain, offering increased access to 3D model-driven data directly.
            With automated communication and optimized logistics, owners can
            effectively address costly challenges, leading to enhanced cost
            management and improved profitability for all stakeholders. Complete
            visibility and streamlined workflows enabled by direct 3D
            model-based data access will drive greater efficiency and
            resilience, ushering in a new era of innovation and growth in an
            improved supply chain ecosystem.
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
          <h2>Vendor Collaboration</h2>
          <p>
            Presently, the design and construction industry struggles with the
            limitations of relying on 2D drawings, which hinder effective
            collaboration and coordination among vendors, trades, and suppliers.
            Access to 3D digital building models remains challenging for many
            stakeholders, exacerbating supply chain management issues and
            resulting in elevated costs and inefficiencies. These constraints
            emphasize the critical need for transformative measures to enhance
            digital accessibility and streamline communication within the
            industry. <br />
            <br /> To address the need for enhanced vendor collaboration and
            access to digital building models, Collegium offers transformative
            solutions. By providing direct access to 3D models, Collegium
            streamlines workflows and enhances industry competitiveness
            significantly. <br />
            <br /> Anticipating the future, a seamlessly integrated digital
            environment holds the potential to transform collaboration
            throughout the supply chain positively. Empowering businesses with
            direct access to digital models, automated workflows, and optimized
            logistics, it heralds substantial cost savings and operational
            enhancements, signaling a transformative era of innovation and
            growth in making buildings.
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
          <h2>Seamless Connectivity</h2>
          <p>
            At this time, the design & construction industry faces challenges in
            digital integration among various vendors, trades, and suppliers.
            This situation leads to significant hurdles and increased costs. The
            lack of seamless connectivity impedes supply chain management,
            resulting in higher costs and operational inefficiencies,
            necessitating immediate action. <br />
            <br />
            In response to this need, Collegium emerges as a transformative
            force, offering comprehensive solutions to facilitate direct access
            to digital building models for all vendors. By revolutionizing
            workflows and operations, Collegium aims to enhance industry growth
            and competitiveness. Through seamless communication and streamlined
            processes, businesses can smoothly transition to a more integrated
            and efficient system, laying the groundwork for future advancements.
            <br />
            <br /> Looking ahead, a future characterized by seamless digital
            collaboration promises to revolutionize the construction industry.
            With direct access to digital models, automated processes, and
            optimized logistics, owners active in the commercial real estate
            market can expect significant cost savings, reduced schedules and
            operational improvements. This emphasis on seamless connectivity
            across vendors will lead to a new era of innovation and growth for
            the future of making buildings.
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
          label="Supply Chain Integration"
          description="Limited digital integration hinders vendors, trades, and suppliers, prompting 
          Collegium's innovative solutions."
          func={togglePopoutOne}
        />
        <BenefitsContainer
          imageUrl={vendor2}
          label="Vendor Collaboration"
          description="Improving vendor collaboration through direct access to 3D models revolutionizes industry efficiency."
          func={togglePopoutTwo}
        />
        <BenefitsContainer
          imageUrl={vendor3}
          label="Seamless Connectivity"
          description="Seamless connectivity empowers vendors with direct digital model access, transforming making buildings"
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
