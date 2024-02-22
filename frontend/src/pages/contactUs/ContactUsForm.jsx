import React from "react";
import "./contactUsForm.css"
import Button from "../../components/button/Button";

import Image3 from "../../images/contactUs/Rectangle 1.png"


const ContactUsForm = () => {
  return (


    
    <div className="contact-us-container" >
      
      <div className="contact-us-image-container">
        <h1>CONTACT US</h1>
         <img className="contact-us-image" src={Image3} alt="Contact Us"/>
        
      </div>
     
    
    <div className="contact-us-form">
    <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="e45112b0-46e4-453f-aab9-aced02807209"/>
      <div className="main-form">
      <div className="main-form1">
        
        <input type="text" name="first-name" className="first-name"  placeholder="First Name"required/>
       
        <input type="text" name="last-name" className="last-name" placeholder="Last Name" required/>
           
        <input type="tel" name="phone" id="phone" className="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
       
        <input type="email" name="email" className="email" placeholder="Email" required/>
        
        <input type="company-name" name="Company Name" className="company-name" placeholder="Company Name" required/>
       <textarea rows="5" name="message" placeholder="Enter you message here..." required></textarea>
      </div>
 

   </div>
     <div className="checkbox-container">
    
      <div> 
        <p>What best describes your company?*</p>
        
 
      <input type="checkbox" id="real-estate-dev" name="Real Estate Developer" value="yes"/>
      <label for="real-estate-dev">Real Estate Development<br/></label>
      <input type="checkbox" id="architecture" name="Architecture" value="yes"/>
      <label for="architecture">Architecture<br/></label>
      <input type="checkbox" id="engineering" name="Engineering" value="yes"/>
      <label for="engineering">Engineering<br/></label>
     <input type="checkbox" id="pm-logistics" name="PM & Logistics" value="yes"/>
      <label for="PM & Logistics">PM & Logistics<br/></label>
      <input type="checkbox" id="building-trades" name="Building Trades" value="yes"/>
      <label for="building-trades">Building Trades<br/></label>
      <input type="checkbox" id="material-vendors" name="Material Vendors" value="yes"/>
      <label for="material-vendors">Material Vendors<br/></label>
 
    </div> 


    <div > 
        <p>How should we contact you?*</p>
  
      <input type="checkbox" id="email-me" name="Email me" value="yes"/>
      <label for="email-me">Email me<br/></label>
      <input type="checkbox" id="call-me" name="Call me" value="yes"/>
      <label for="call-me">Call me<br/></label>

  
  <div className="contact-us-submit-btn"><Button  type="submit" label="Submit"/></div>
      </div> 
      
</div> 
</form>
    </div>
{/* <div className="graphics-container">
   <img src={BackgroundImage} alt="" /> 
   </div> */}

  </div>
   );


   
}
 
export default ContactUsForm;