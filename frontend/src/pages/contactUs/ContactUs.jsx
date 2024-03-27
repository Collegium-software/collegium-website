import Navbar from "../../components/navbar/Navbar";
import ContactUsForm from "./ContactUsForm";
import SFooter from "../../components/footer/SFooter";
import { useEffect } from "react";
import InterimNavbar from "../../components/navbar/InterimNavbar";

const ContactUs = () => {
  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
  });
  return (
    <div>
      <InterimNavbar background="white" color="black" />
      <ContactUsForm />
      <SFooter />
    </div>
  );
};

export default ContactUs;
