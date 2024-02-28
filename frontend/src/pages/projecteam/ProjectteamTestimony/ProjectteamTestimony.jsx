import React from 'react';
import './projectteamTestimony.css';

import Partner1 from '../../../images/owners/Cetana.png';
import Partner2 from '../../../images/owners/nextArch.png';
import Partner3 from '../../../images/owners/MCWLogo.png';
import Partner4 from '../../../images/owners/Smoky Lake .png';
import Line from '../../../components/Line';


const ProjectteamsTestimonyHeader = () => {
  return(
    <div className="projectteamsTestimonyHeader"> 
      <h1>"Andrew Bowerbank"</h1>
      <Line blackLine />
      <p>“We are thrilled with our partnership with Collegium." - CEO OF CETANA</p>
    </div>
  );
};


const ProjectteamsPartners = ({ imageUrl, title }) => { 
  return (
    <div className="projectteamsPartners"> 
      <div className="projectteamsPartnersImage"><img src={imageUrl} alt={title} /></div> {/* Updated class name */}
      <p>{title}</p>
    </div>
  );
};

const ProjectteamsTestimony = () => {
  return (
    <div className="projectteams-Testimony-Page"> 
      <ProjectteamsTestimonyHeader /> 
      <h2 className="projectteamsSubheader">Projectteams Trust Us</h2> 
      <div className="projectteams-Partners-Container "> 
        <ProjectteamsPartners
          imageUrl={Partner1}
          title="CETANA GROUP"
        />
        <ProjectteamsPartners
          imageUrl={Partner2}
          title="NEXT ARCHITECTURE"
        />
        <ProjectteamsPartners
          imageUrl={Partner3}
          title="MCW ENGINEERING"
        />
        <ProjectteamsPartners
          imageUrl={Partner4}
          title="SMOKY LAKE"
        />
      </div>
    </div>
  );
};

export default ProjectteamsTestimony; 
