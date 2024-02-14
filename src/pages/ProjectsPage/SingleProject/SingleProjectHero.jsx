 import "./singleProjectPage.css"
 import Button from "../../../components/button/Button";

const SingleProjectHero = () => {
  return ( 
<div>
      <div className="la-sng-heroSection">
        <div className="la-hs-main-container">
          <p className="la-route">Home/Our Projects/Project Name</p>
          <h1 className="la-hero-title">Castle Crest Condos</h1>
          
          <div className="la-herobutton">
            <Button label="Contact Us" />
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default SingleProjectHero;