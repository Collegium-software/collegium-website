import "./sfooter.css";
import logo from "../../images/footer/logo.png";
import linkedin from "../../images/footer/wLinkedin.png";
import facebook from "../../images/footer/wFacebook.png";
import instagram from "../../images/footer/wInstagram.png";
import twitter from "../../images/footer/wX.png";
import whatsapp from "../../images/footer/wWhatsapp.png";
const SFooter = () => {
  const linksList = [
    { id: 1, link: "/careers", label: "Careers" },
    { id: 2, link: "/blogs", label: "Blogs" },
    { id: 3, link: "/partners", label: "Partners" },
    { id: 4, link: "/faqs", label: "FAQs" },
    { id: 5, link: "/contactus", label: "Contact Us" },
  ];
  const socialMediaIcons = [
    { id: 1, name: "LinkedIn", image: linkedin },
    { id: 2, name: "Facebook", image: facebook },
    { id: 3, name: "Instagram", image: instagram },
    { id: 4, name: "X", image: twitter },
    { id: 5, name: "Whatsapp", image: whatsapp },
  ];
  const Links = ({ link }) => {
    return (
      <li>
        <a href={link.link}>{link.label}</a>
      </li>
    );
  };
  const SocialMedia = ({ smedia }) => {
    return (
      <div className="smdia-icons">
        <img src={smedia.image} alt={smedia.name} />
      </div>
    );
  };
  return (
    <div className="sfooter-section">
      <div className="sfooter-container">
        <div className="sfooter-top">
          <div className="sfooter-collegium">
            <div className="sfooter-logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="collegium-slogan">
              <p>
                At Collegium, our commitment is to drive efficiency and
                collaboration in the construction ecosystem.
              </p>
            </div>
            <div className="sfooter-socialmedia">
              {socialMediaIcons.map((smedia) => (
                <SocialMedia key={smedia.id} smedia={smedia} />
              ))}
            </div>
          </div>
          <div className="sfooter-about">
            <h5>About Collegium</h5>
            <ul className="sfooter-links">
              {linksList.map((link) => (
                <Links key={link.id} link={link} />
              ))}
            </ul>
          </div>
          <div className="sfooter-contacts">
            <h5>Offices</h5>
            <ul className="sfooter-contacts-links">
              <li>
                <strong>Headquarter:</strong>
                <br />
                123 ABC Ave, SW <br />
                Calgary, AB, Canada
              </li>
              <li>
                <strong>USA:</strong>
                <br />
                123 ABC Ave, SW <br />
                Los Angeles, CA, USA
              </li>
            </ul>
          </div>
        </div>
        <div className="sfooter-copyright">
          <p>&copy;2024 Collegium Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default SFooter;
