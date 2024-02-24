import UserStory from "./userStory";
import project1 from "../../images/usersStoryPage/us-project1.jpg"
import project2 from "../../images/usersStoryPage/us-project2.jpg"
import project3 from "../../images/usersStoryPage/us-project3.jpg"


const UserStoryGallery = () => {
  return (
    <div>
    <UserStory
      name="Alan Main"
      jobTitle='CEO of Calgary Construction Co'
      userText="From the very first meeting, the team at Collegium embraced my vision with enthusiasm. Their collaborative spirit turned my ideas into detailed plans, weaving innovation and functionality into every aspect of the project."
      imageUrl= {project1}
      alt="project 1"
      date="May 9, 2023"
    />
    <UserStory
    name="John Smith"
    jobTitle='CEO of Pacific Ridge Properties'
    userText="Working with [Construction Projects Managing Company] was a game-changer for our project. Their attention to detail and proactive management approach ensured that every aspect of the construction process was executed flawlessly. From project inception to completion, they maintained clear communication channels, kept us informed at every step, and delivered exceptional results within budget and on time."
    imageUrl= {project2}
    alt="project 2"
    date="January 12, 2022"
  />

<UserStory
    name="Stephanie Nguyen"
    jobTitle='CDO of Golden Gate Ventures'
    userText="Collegium played a pivotal role in the success of our construction project. Their proactive approach, coupled with their in-depth industry knowledge, resulted in streamlined project execution and cost-effective solutions. Their team's dedication and professionalism were evident throughout the process, from initial planning to final completion. "
    imageUrl= {project3}
    alt="project 3"
    date="November 14, 2021"
  />
  </div>
  );

}
 
export default UserStoryGallery;