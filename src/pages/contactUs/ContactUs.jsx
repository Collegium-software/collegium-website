import Navbar from "../../components/navbar/Navbar";
import ContactUsForm from "./ContactUsForm";
import SFooter from "../../components/footer/SFooter";

const ContactUs = () => {
  return (
    <div>
    <Navbar />
    <ContactUsForm/>
    {/* <div className="contact-us-footer" ><SFooter /></div> */}
    </div>
    );
}
 
export default ContactUs;