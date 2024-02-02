import React from 'react';
import './footer.css'; 

import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/entypo-social/linkedin';
import twitterIcon from '@iconify-icons/entypo-social/twitter';
import instagramIcon from '@iconify-icons/entypo-social/instagram';
import facebookIcon from '@iconify-icons/entypo-social/facebook-with-circle';
import youtubeIcon from '@iconify-icons/entypo-social/youtube';
import copyrightIcon from '@iconify-icons/ph/copyright-thin';

import Line from '../../components/Line';


const FooterLine = () => {
return (
<div className="footerLine">
  <Line whiteLine/>
  <div className="copyrightText">
    <Icon icon={copyrightIcon}  height="1.5em"/> Collegium Technologies Inc.
  </div>
</div>
)}
const Container = () => {
  return (
    <div className="footer-container">
      <div className="footer-section1">
        <h2>Collegium</h2>
        <p>At Collegium, our commitment is to drive efficiency and collaboration 
          in the construction ecosystem. 
        </p>
        <div className="icons">
          <Icon icon={linkedinIcon}  height="1.5em"/>
          <Icon icon={twitterIcon} height="1.5em"/>
          <Icon icon={instagramIcon} height="1.5em"/> 
          <Icon icon={youtubeIcon} height="1.5em"/> 
          <Icon icon={facebookIcon} height="1.5em"/>
        </div>
      </div>

      <div className="footer-section2">
        <h3>About Collegium</h3>
        <p>Services</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>Partners</p>
        <p>FAQ</p>
        <p>Contact us</p>
      </div>

      <div className="footer-section3">
        <h3>Offices</h3>
        <p>123 Main Street</p>
        <p>City, State, Zip</p>
      </div>
    </div>
  );
  }
const Footer = () =>{
  return(
    <div className="footer">
      <Container/>
      <FooterLine />
    </div>
  )
}
export default Footer;