import "./careers.css";
import Button from "../../components/button/Button";
import { useState, useEffect } from 'react';
import careersData from "../../data/careers.json"; // Import the JSON data

const Careers = () => {
  const [careers, setCareers] = useState([]);
  
  useEffect(() => {
    setCareers(careersData.careers);
  }, []);

  return (
    <div>
      {careers.map((careers) => (
        <div className="careers" key={careers.id}>
          <div className="careers-text">
            <h2 className="careers-title">{careers.title}</h2>
            <p className="careers-description">{careers.description}</p>
            <div className="careersButton">
              <Button label="Apply Now" color="black" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Careers;
