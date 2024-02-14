import React from 'react';
import './contactCard1.css';

const ContactCard = () => {
  return (
    <div className="contactCard">
      <h4>Call / Email Us Today</h4>
      <div className="contactInfo">
        <p>Phone: <a href="tel:+123456789">+123456789</a></p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
    </div>
  );
};

export default ContactCard;
