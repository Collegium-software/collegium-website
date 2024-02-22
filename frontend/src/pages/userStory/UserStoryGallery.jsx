import UserStory from "./userStory";
import project1 from "../../images/usersStoryPage/us-project1.jpg"


const UserStoryGallery = () => {
  return (
    <UserStory
      name="Alan Main"
      jobTitle='CEO of Calgary Construction Co'
      userText="From the very first meeting, the team at Collegium embraced my vision with enthusiasm. Their collaborative spirit turned my ideas into detailed plans, weaving innovation and functionality into every aspect of the project."
      imageUrl= {project1}
      alt="project 1"
      date="May 9, 2023"
    />
    
  );

}
 
export default UserStoryGallery;