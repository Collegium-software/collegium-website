
import "./userStory.css"
import Button from "../../components/button/Button"

const UserStory = (props) => {
  
  const { name, jobTitle, imageUrl, userText, alt, date} = props;
  

  return (
  <div className="us-gallery-container">
   <div className="us-project-container">
      <div className="us-image-container">
      <img src={imageUrl} alt={alt}/>
    </div>
    <div className="us-text-container">
      <h3>{name}</h3>
      <h4>{jobTitle}</h4>
      <p>{userText}</p>
      <div className="date-button-container">
      <div>
      <p>{date}</p>
      </div>
      <div className="us-button">
      <Button label="Learn More" to="/userstory1" color="black"/>
      </div>
      </div>
    </div>

  </div>
  </div>
  );
}
 
export default UserStory;
