import React from "react";
import "../comparison/comparison.css";
import Button from "../button/Button";

const Comparison = () => {
  return (
    <div className="comparison-container">
      <div className="text-container">
        <div className="title-container-why-different">
          <h1 className="title-why-different">WHY WE ARE DIFFERENT?</h1>
        </div>
        <div className="text-container-why-different">
          <p className="text-why-different">
            Lorem ipsum dolor sit amet consectetur. Vitae elit lacus lobortis
            aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean
            diam. Quisque tincidunt.
          </p>
          <div className="comparisonButton">
            <Button label="Contact Us" />
          </div>
        </div>
      </div>

      <div className="white-container">
        <h3>TRADITIONAL CONSTRUCTION MANAGEMENT</h3>
        <ul style={{ listStyleType: "square" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>Lorem ipsum dolor sit amet consectetur.</li>
          ))}
        </ul>
      </div>

      <div className="dark-container">
        <h3>COLLEGIUM CONSTRUCTION MANAGEMENT</h3>
        <ul style={{ listStyleType: "square" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>Lorem ipsum dolor sit amet consectetur.</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comparison;
