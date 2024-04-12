import React from "react";
import "./projectteamBenefits.css";
import { useState } from "react";

import ownersteam1 from "../../../images/projectteam/ownersteam1.jpeg";
import ownersteam2 from "../../../images/projectteam/ownersteam2.jpeg";
import ownersteam3 from "../../../images/projectteam/ownersteam3.jpeg";

const ProjectteamBenefits = () => {
  const BenefitsContainer = ({ imageUrl, label, description, func }) => (
    <div className="ownersTeamBenefitsContainer">
      <div
        className="ownersTeamImageContainer"
        alt={label}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={func}
      >
        <div className="ownersTeamImage-label">{label}</div>
      </div>
      <p onClick={func}>
        {description} <br />
        <span>Click to learn more</span>
      </p>
    </div>
  );

  const CardOnePopoutWindow = ({ onClose }) => {
    return (
      <div className="ownersTeamPopout-overlay">
        <div className="ownersTeamPopout-content">
          <h2>Design Innovation</h2>
          <p>
            The design and construction (AEC) community struggles with
            integrating new technologies, managing costs, and navigating
            increasing project complexities. Amidst these challenges, there's a
            growing recognition of the pivotal role of design innovation in
            meeting the evolving demands of the industry. <br />
            <br />
            Transitioning from design and construction to the future of making
            buildings, there's a notable shift towards design innovation within
            the AEC community, with companies like Collegium willing to lead the
            charge. Collegium's integrated process and platform facilitate the
            adoption of innovative approaches to streamline processes and
            overcome traditional project challenges, contributing to the
            industry's evolution towards more inventive design solutions.
            <br />
            <br /> Looking ahead, the future of making buildings holds promise
            for rapid innovation and transformative change, fueled by a
            dedication to design innovation championed by entities like
            Collegium. Construction methods will undergo a revolution, resulting
            in faster project timelines and the creation of cutting-edge
            structures. This future ecosystem will be characterized by
            resourceful structures that epitomize design innovation, boasting
            innovative systems, heightened efficiency, and unparalleled user
            satisfaction at a reduced cost.
          </p>
          <div className="ownersTeamPopout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const CardTwoPopoutWindow = ({ onClose }) => {
    return (
      <div className="ownersTeamPopout-overlay">
        <div className="ownersTeamPopout-content">
          <h2>Collaborative Excellence</h2>
          <p>
            Professionals in architecture, engineering, and construction (AEC)
            are facing a myriad of challenges, including navigating increasing
            project complexities and managing ever-expanding team composition to
            meet the rapidly evolving industry demands. It's evident that
            relying solely on archaic, siloed individual efforts is insufficient
            to address these pressing issues effectively; instead, there is a
            crucial need for advanced solutions that promote greater
            collaborative efforts.
            <br />
            <br /> Collegium emerges as a pivotal player, emphasizing the
            transformative power of interdependence and collaborative excellence
            within the AEC community. Through its integrated platform, Collegium
            goes beyond merely streamlining processes and overcoming traditional
            project challenges; it prioritizes fostering interdependent
            collaboration and innovation. By facilitating seamless communication
            and resource-sharing among stakeholders, Collegium accelerates the
            transition towards a more integrated and collaborative approach to
            Making buildings (together) in the future. <br />
            <br />
            We can see opportunity in the future for rapid innovation and
            transformative change, with Collegium leading the way in driving
            progress. Collegium's emphasis on interdependence will serve as the
            catalyst for fostering effective collaboration among all
            stakeholders. This collaborative approach will result in the
            implementation of innovative methods to make buildings, leading to
            faster project timelines and the creation of high-quality
            structures. Moreover, Collegium's commitment to promoting
            collaboration will ensure that projects are executed with maximum
            efficiency, benefiting both social equity and economic viability.
            Guided by Collegium's stewardship-centric approach, resourceful
            structures will feature innovative systems, heightened efficiency,
            and enhanced user satisfaction, marking a significant leap forward
            in the evolution of a truly interdependent industry.
          </p>
          <div className="ownersTeamPopout-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  const CardThreePopoutWindow = ({ onClose }) => {
    return (
      <div className="ownersTeamPopout-overlay">
        <div className="ownersTeamPopout-content">
          <h2>Sustainable Success</h2>
          <p>
            The sense of urgency is palpable, but we cannot solve the issues of
            the next two decades by relying on the processes of the last two
            centuries. The architectural, engineering, and construction (AEC)
            community finds itself burdened even with the simplest tasks
            associated with integrating sustainable practices, ensuring
            environmental stewardship, and overcoming project complexities.
            <br />
            <br />
            Rather than being immobile, Collegium emerges as a pivotal player,
            uniquely positioned to address the challenges facing the
            architecture, engineering, and construction (AEC) community. With a
            primary focus on sustainability, Collegium fosters interdependent
            collaboration and innovation within the industry. Its integrated
            platform offers a comprehensive solutions to streamline processes
            and overcome traditional project challenges efficiently. By
            facilitating seamless communication and resource-sharing among
            stakeholders, Collegium accelerates the transition towards a more
            sustainable and environmentally responsible approach to making
            buildings. Through Collegium, the AEC community can navigate
            complexities while prioritizing sustainable practices at every
            stage, ensuring a resilient future for the built environment. <br />
            <br />
            As we forge ahead into uncharted territory, the future of building
            construction beckons with rapid innovation and transformative
            change, and Collegium stands at the forefront. With sustainability
            as our guiding principle, Collegium is poised to revolutionize the
            industry. Our methods will yield high-quality structures while
            safeguarding the long-term health of humankind, including the right
            to attainable and affordable housing. Through unwavering dedication
            to sustainability, Collegium will pave the way for sustainable
            marvels, enriching social equity, ensuring economic viability, and
            enhancing environmental well-being. Guided by Collegium's
            stewardship-centric approach, our resourceful structures will set
            new benchmarks for sustainability, efficiency, and environmental
            harmony, marking a profound advancement in the construction
            industry. Join us in redefining the future of making buildings (
            together) in the future.
          </p>
          <div className="ownersTeamPopout-button">
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
    <div className="ownersTeam-benefits-Page">
      <div className="ownersTeam-benefits-cards">
        <BenefitsContainer
          imageUrl={ownersteam1}
          label="Design Innovation"
          description="The AEC community acknowledges design innovation's importance, Collegium drives that transformative change."
          func={togglePopoutOne}
        />
        <BenefitsContainer
          imageUrl={ownersteam2}
          label="Collaborative Excellence"
          description="To navigate the complexities; interdependence will foster collaborative innovation, and change."
          func={togglePopoutTwo}
        />
        <BenefitsContainer
          imageUrl={ownersteam3}
          label="Sustainable Success"
          description="Accelerating innovation is crucial for revamping design & construction to embrace sustainability effectively."
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

export default ProjectteamBenefits;
