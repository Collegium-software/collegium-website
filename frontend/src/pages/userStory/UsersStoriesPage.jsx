
import Navbar from "../../components/navbar/Navbar";
import UsHero from "./UsHero";
import UserStoryGallery from "./UserStoryGallery";
import UserStory from "./userStory";

const UsersStoriesPage = () => {
  return (  
    <div>
    <Navbar background="#0a253b" color="white"/>
    <UsHero/>
    <UserStoryGallery/>
    </div>

  );
}
 
export default UsersStoriesPage;