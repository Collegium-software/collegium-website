import React from "react";
import "./ownersBenefits.css";
import { useState } from "react";
// import Button from "../../../components/button/Button.jsx";

import OwnersPic1 from "../../../images/owners/owners1.jpeg";
import OwnersPic2 from "../../../images/owners/owners2.jpeg";
import OwnersPic3 from "../../../images/owners/owners3.jpeg";

const OwnersBenefits = () => {
  const BenefitsContainer = ({ imageUrl, label, description, func }) => (
    <div className="ownersBenefitsContainer">
      <div
        className="ownersImageContainer"
        alt={label}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={func}
      >
        <div className="ownersImage-label">{label}</div>
      </div>
      <p onClick={func}>
        {description}
        <br />
        <span>Click to learn more</span>
      </p>
    </div>
  );

  const CardOnePopoutWindow = ({ onClose }) => {
    return (
      <div className="popout-overlay">
        <div className="popout-content">
          <h2>Cost Optimization</h2>
          <p>
            In the current construction landscape, owners grapple with
            formidable challenges such as unpredictable cost spikes, sluggish
            digital integration, and persistent schedule delays. Despite
            technological advancements, the industry remains entrenched in
            traditional practices, where projects follow a linear path from
            design to bid to construction, often resulting in inflated expenses
            for owners. This underscores the urgent need for innovation to
            streamline processes and ensure budget certainty. <br />
            <br />
            The transition facilitated by Collegium heralds a departure from the
            conventional approach, signaling a shift towards a more integrated
            and transparent model. Owners increasingly seek participants capable
            of orchestrating the entire supply chain seamlessly, prioritizing
            cost predictability and budget certainty. Embracing open and
            transparent practices, stakeholders aim to mitigate challenges
            related to cost fluctuations and harness technology to drive
            progress in real estate development. <br />
            <br />
            Looking ahead, the future promises a paradigm shift towards complete
            transparency, streamlined transactions, and enhanced cost control.
            With access to comprehensive data and machine learning-driven
            processes, the industry anticipates significant reductions in costs
            as autonomous supply chains become standard. By eliminating
            intermediaries and leveraging smart contracts, stakeholders aim to
            bolster owners' profits while ensuring budget certainty and
            accelerating cash flow, enabling more agile decision-making
            processes. This vision underscores the transformative potential
            within the construction sector, emphasizing the paramount importance
            of cost and budget certainty in driving sustainable growth and
            innovation.
          </p>
          <div className="popout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const CardTwoPopoutWindow = ({ onClose }) => {
    return (
      <div className="popout-overlay">
        <div className="popout-content">
          <h2>Streamlined Scheduling</h2>
          <p>
            In construction right now, owners struggle with time management,
            keeping schedules on track, and dealing with delays. Even though
            technology has improved, the industry still sticks to old-fashioned
            methods, causing projects to take longer than planned. This shows
            that we really need new ideas to make processes smoother and finish
            projects on time. <br />
            <br /> Collegium's changes are making a big difference. They're
            moving away from the old methods and making things more organized
            and open. Owners now want partners who can handle everything
            smoothly, especially when it comes to sticking to schedules. By
            being transparent and using new tech, they're aiming to cut down on
            delays and move projects forward faster. <br />
            <br />
            Looking forward, there's hope for better time management in
            construction. We're aiming for clear communication and better
            planning, using data and new tools. With smarter contracts and
            simpler workflows, we hope to avoid delays, keep projects on
            schedule, and make decisions faster. This positive change means we
            can expect projects to be finished on time more often, making the
            construction process smoother and more efficient.
          </p>
          <div className="popout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const CardThreePopoutWindow = ({ onClose }) => {
    return (
      <div className="popout-overlay">
        <div className="popout-content">
          <h2>Proactive Risk Mitigation</h2>
          <p>
            In today's construction realm, the perpetual concerns revolve around
            the unpredictable nature of costs and schedules, often resulting in
            projects veering off course. Despite advancements in technology, the
            industry grapples with the risk of projects exceeding budgetary
            constraints and failing to meet deadlines, compromising quality and
            value. This underscores the urgent imperative for a novel approach
            that prioritizes risk management, quality assurance, and value
            maximization. <br />
            <br />
            The advent of Collegium marks a departure from conventional
            methodologies, ushering in a paradigm shift towards enhanced
            organization and transparency throughout the process of making
            buildings. Owners are increasingly demanding participants at all
            levels who can adeptly navigate the intricacies of management while
            placing a heightened emphasis on mitigating risks, ensuring superior
            quality, and maximizing value. By embracing transparency and
            harnessing cutting-edge technology, stakeholders endeavor to
            minimize the inherent risks associated with budget overruns,
            schedule delays, and compromised quality, thereby delivering
            projects that offer unparalleled value. <br />
            <br />
            Looking ahead, there's a palpable sense of optimism regarding the
            potential for transformative change in our current archaic design &
            construction practices. The industry will be forced to move towards
            a future where meticulous risk management, stringent quality control
            measures, and value-driven decision-making are paramount. Collegium,
            through its process and platform will drive meticulous planning,
            accelerated decision-making processes, and the integration of
            data-driven insights, stakeholders aim to proactively address
            uncertainties, enhance project quality, and maximize value for all
            involved parties. Collegium’s forward-looking approach promises a
            future where infrastructure projects are characterized by their
            adherence to accelerated schedules, reduced budgets, and quality
            standards, ultimately delivering exceptional value to stakeholders
            and most importantly to society at large.
          </p>
          <div className="popout-button">
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
    <div className="owners-benefits-Page">
      <div className="owners-benefits-cards">
        <BenefitsContainer
          imageUrl={OwnersPic1}
          label="Cost Optimization"
          description="In the current construction landscape, owners grapple with
          formidable challenges such as unpredictable cost spikes, sluggish
          digital integration, and persistent schedule delays. "
          func={togglePopoutOne}
        />
        <BenefitsContainer
          imageUrl={OwnersPic2}
          label="Streamlined Scheduling"
          description="In construction right now, owners struggle with time management,
          keeping schedules on track, and dealing with delays. Even though
          technology has improved, the industry still sticks to old-fashioned
          methods, causing projects to take longer than planned. "
          func={togglePopoutTwo}
        />
        <BenefitsContainer
          imageUrl={OwnersPic3}
          label="Proactive Risk Mitigation"
          description="In today's construction realm, the perpetual concerns revolve around
          the unpredictable nature of costs and schedules, often resulting in
          projects veering off course. "
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

export default OwnersBenefits;
