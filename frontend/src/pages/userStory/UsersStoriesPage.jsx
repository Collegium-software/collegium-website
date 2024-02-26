
import SFooter from "../../components/footer/SFooter";
import Navbar from "../../components/navbar/Navbar";
import UsHero from "./UsHero";
import UserStoryGallery from "./UserStoryGallery";
import { useEffect } from "react";


const UsersStoriesPage = () => {
  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
  });
  return (  
    <div>
    <Navbar background="#0a253b" color="white"/>
    <UsHero/>
    <UserStoryGallery/>
    <SFooter/>
    </div>

  );
}
 
export default UsersStoriesPage;