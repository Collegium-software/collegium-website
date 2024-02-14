import Navbar from "../../components/navbar/Navbar";
import ContactUsForm from "./ContactUsForm";
import Footer from "../../components/footer/Footer";

const ContactUs = () => {
  return (
    <div>
    <Navbar />
    <ContactUsForm/>
    {/* <div className="contact-us-footer" ><Footer /></div> */}
    </div>
    );
}
 
export default ContactUs;