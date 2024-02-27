import SFooter from "../../components/footer/SFooter";
import Navbar from "../../components/navbar/Navbar";
import FaqHero from "./FaqHero";
import ContactCard from "../../components/contactCard/SadiqContactCard";
import FAQquestion from "./FAQquestion";



const FAQ = () => {
  return (
    <div>
    <Navbar background="white" color="black"/>
    <FaqHero/>
    <div className="contact-card-div"> 
        <ContactCard/>
    </div>
    <FAQquestion
    questionNumber={1}
    question="What types of general contractors use Collegium?"
    answer="General contractors, big and small, use Collegium. We can help manage the quick timelines and needs of design-build contractors, self-perform contractors, heavy civil contractors, residential contractors, institutional and commercial contractors and more – all on one platform. All on budget, on time. Read some success stories of industry-leading general contractors who run their projects on the Collegium platform."
    />

<FAQquestion
    questionNumber={2}
    question="How does Collegium's pricing model work for general contractors?"
    answer="Collegium’s platform has a transparent pricing model that includes unlimited users, unlimited document storage and best-in-class support so you can accurately budget your annual software spend without worrying about increased costs along the way. To learn more, please Contact Us for details."
    />

<FAQquestion
    questionNumber={3}
    question="Is Collegium just for commercial general contractors?"
    answer="Although Collegium does serve residential, institutional and vertical commercial construction projects, our software is also successfully used by teams who perform heavy civil construction, infrastructure, horizontal construction and more. Whether you're constructing miles of highways, expanding an airport or replacing a distribution system, Collegium's platform can help you connect your teams and complete projects faster."
    />

    <SFooter/>

    </div>
   );
}
 
export default FAQ;