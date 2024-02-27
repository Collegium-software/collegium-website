import Navbar from "../../../components/navbar/Navbar";
import SingleProjectHero from "./SingleProjectHero";
import SingleProject from "./SingleProject";
import ContactCard from "../../../components/contactCard/SadiqContactCard";
import SingleProjectCarousel from "./SingleProjectCarousel";
import SFooter from "../../../components/footer/SFooter";

const SingleProjectPage = () => {
  return (
    <>
      <div className="sng-project-container">
        <Navbar />
        <SingleProjectHero />
        <div className="contact-card-div">
          <ContactCard />
        </div>
        <SingleProject />
        <div className="my-carousel">
          <SingleProjectCarousel />
        </div>
      </div>
<<<<<<< HEAD
      <SFooter />
    </>
  );
};

export default SingleProjectPage;
=======
      <SingleProject/>
      <div className="my-carousel"> 
      <SingleProjectCarousel/>
      </div>
      <div>
      <SFooter/>
      </div>

    </div>

    );
}
 
export default SingleProjectPage;
>>>>>>> 3e29d740693c22dda6bdde7c548b791dc976aa48
