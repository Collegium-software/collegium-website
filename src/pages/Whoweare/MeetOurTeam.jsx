import "./meetourteam.css";
import firstPerson from "../../images/WhoWeAre/person-a.jpg";
import secondPerson from "../../images/WhoWeAre/person-b.jpg";
import thirdPerson from "../../images/WhoWeAre/person-c.jpg";

const personsData = [
  {
    id: 1,
    image: firstPerson,
    name: "Christina Carole",
    description:
      "Placeholder for short description about this person. Placeholder for short description about this person",
  },
  {
    id: 2,
    image: secondPerson,
    name: "Carlos Juan",
    description:
      "Placeholder for short description about this person. Placeholder for short description about this person",
  },
  {
    id: 3,
    image: thirdPerson,
    name: "John Alex",
    description:
      "Placeholder for short description about this person. Placeholder for short description about this person",
  },
];
const Team = ({ person }) => {
  return (
    <div className="team-details">
      <div className="person">
        <div className="team-gradient-div">
          <div className="person-pic-name">
            <img src={person.image} alt={person.name}></img>
            <div className="person-name">
              <p>{person.name}</p>
            </div>
          </div>
        </div>
        <div className="person-description">
          <p>{person.description}</p>
        </div>
      </div>
    </div>
  );
};
const MeetOurTeam = () => {
  return (
    <div className="meetourteam">
      <div className="team-main-container">
        <div className="team-title">
          <h2>Meet Our Team</h2>
        </div>
        <div className="team-details">
          {personsData.map((person) => (
            <Team key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
