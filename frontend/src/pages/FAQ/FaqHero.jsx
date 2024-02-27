import "./FaqHero.css"
 import Button from "../../components/button/Button"

const FaqHero = () => {
  return ( 
<div>
      <div className="faq-sng-heroSection">
        <div className="faq-hs-main-container">
          <p className="faq-route">Home/FAQ</p>
          <h1 className="faq-hero-title">FAQ</h1>
          <h3>Find Answers Here to Your Question</h3>
          
          <div className="faq-herobutton">
            <Button label="Contact Us" to="/contactus"/>
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default FaqHero;