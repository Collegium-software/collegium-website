import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import SingleProjectHero from "./SingleProjectHero";
import SingleProject from "./SingleProject";
import ContactCard from "../../../components/contactCard/SadiqContactCard";
import SingleProjectCarousel from "./SingleProjectCarousel";


const SingleProjectPage = () => {
  return (
    <div className="sng-project-container">
      <Navbar />
      <SingleProjectHero/>
      <div className="contact-card-div"> 
        <ContactCard/>
      </div>
      <SingleProject/>
      <SingleProjectCarousel/>
      <Footer/>


    </div>

    );
}
 
export default SingleProjectPage;