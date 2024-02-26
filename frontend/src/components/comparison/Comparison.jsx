import React from "react";
import "../comparison/comparison.css";
import Button from "../button/Button";

const Comparison = () => {
  const linkText = [
    {
      id: 1,
      text: "Fragmented Communication: Lack of effective communication channels among stakeholders often resulted in misunderstandings and delays.",
    },
    {
      id: 2,
      text: "Rigid Processes: Sequential nature of tasks limited flexibility and hindered adaptation to changes during construction.",
    },
    {
      id: 3,
      text: "Cost Overruns and Delays: Inefficient workflows and extensive rework contributed to project delays and exceeded budgets.",
    },
    {
      id: 4,
      text: "Limited Innovation: Reliance on traditional methods stifled innovation and hindered the adoption of new technologies.",
    },
  ];
  const linkText1 = [
    {
      id: 1,
      text: "Enhanced Collaboration: Integrated project delivery methods foster collaboration among stakeholders, resulting in improved coordination and fewer conflicts.",
    },
    {
      id: 2,
      text: "Improved Efficiency: Digital tools and automated processes streamline workflows, reducing project timelines and minimizing rework.",
    },
    {
      id: 3,
      text: "Cost Savings: Efficient resource allocation and proactive risk management contribute to cost savings and prevent budget overruns.",
    },
    {
      id: 4,
      text: "Innovation and Sustainability: Adoption of new technologies and sustainable practices drives innovation and improves project sustainability.",
    },
  ];

  const MyList = ({ list }) => {
    return (
      <ul>
        <li>{list.text}</li>
      </ul>
    );
  };

  return (
    <section className="comparisonSection">
      <div className="comparison-container">
        <div className="text-container">
          <div className="title-container-why-different">
            <h1 className="title-why-different">Why Are We Different?</h1>
          </div>
          <div className="comparisonMainText">
            <p className="text-why-different">
              We bring emergent technologies of Artificial Intelligence, Machine
              Learning, and IoT to a new digital process of Making Buildings
              that makes traditional design & construction practice obsolete in
              comparison. ​ That's Collegium.
            </p>
            <div className="comparisonButton">
              <Button label="Contact Us" to="/contactus"/>
            </div>
          </div>
        </div>

        <div className="white-container">
          <h3>Traditional Construction Management</h3>

          {linkText.map((list) => (
            <MyList key={list.id} list={list} />
          ))}
          <div className="comparison-overlay"></div>
        </div>

        <div className="dark-container">
          <h3>Collegium Construction Management</h3>
          {linkText1.map((list) => (
            <MyList key={list.id} list={list} />
          ))}
        </div>
        <div className="comparison-overlay"></div>
      </div>
    </section>
  );
};

export default Comparison;
