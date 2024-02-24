import Button from "../../../components/button/Button";
import "../../userStory/singleUserStory/userStoryVertical.css"
import project1 from "../../../images/usersStoryPage/us-project1.jpg"
import project2 from "../../../images/usersStoryPage/us-project2.jpg"
import project3 from "../../../images/usersStoryPage/us-project3.jpg"

const UserStoryVerticalGallery = () => {
  return ( 
    <div className="user-story-vertical-gallery-container">
      <UserStoryVertical 
      name="Alan Main"
      jobTitle='CEO of Calgary Construction Co'
      userText="From the very first meeting, the team at Collegium embraced my vision with enthusiasm. Their collaborative spirit turned my ideas into detailed plans, weaving innovation and functionality into every aspect of the project."
      imageUrl= {project1}
      alt="project 1"
      date="May 9, 2023"
      />
  

<UserStoryVertical 
    name="John Smith"
    jobTitle='CEO of Pacific Ridge Properties'
    userText="Working with [Construction Projects Managing Company] was a game-changer for our project. Their attention to detail and proactive management approach ensured that every aspect of the construction process was executed flawlessly. "
    imageUrl= {project2}
    alt="project 2"
    date="January 12, 2022"
    />
    
    <UserStoryVertical
     name="Stephanie Nguyen"
     jobTitle='CDO of Golden Gate Ventures'
     userText="Collegium played a pivotal role in the success of our construction project.Their proactive approach, coupled with their in-depth industry knowledge, resulted in streamlined project execution and cost-effective solutions. Their team's dedication and professionalism were evident throughout the process, from initial planning to final completion.  "
     imageUrl= {project3}
     alt="project 3"
     date="November 14, 2021"
    
    />
    </div>


   );
}

  
  const UserStoryVertical = (props) => {
  
    const { name, jobTitle, imageUrl, userText, alt, date} = props;
    
  
    return (
    <div className="us-ver-gallery-container">
     <div className="us-ver-project-container">
        <div className="us-ver-image-container">
        <img src={imageUrl} alt={alt}/>
      </div>
      <div className="us-ver-text-container">
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <p>{userText}</p>
        <div className="ver-date-button-container">
        <div>
        <p>{date}</p>
        </div>
        <div className="ver-us-button">
        <Button label="Learn More"  color="black"/>
        </div>
        </div>
      </div>
  
    </div>
    </div>
    );
  }
   
  export default UserStoryVerticalGallery;
  
