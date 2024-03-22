import "./sfooter.css";
import logo from "../../images/footer/logo.png";
import linkedin from "../../images/footer/linkedin2.png";
import twitter from "../../images/footer/twitter2.png";

const SFooter = () => {
  const linksList = [
    { id: 1, link: "/owners", label: "Owners" },
    { id: 2, link: "/owners-team", label: "Owners Team" },
    { id: 3, link: "/vendors", label: "Vendors" },
    { id: 4, link: "/blogs", label: "Blogs" },
    { id: 5, link: "/contactus", label: "Contact Us" },
    { id: 5, link: "/platform/login", label: "Platform" },
  ];
  const socialMediaIcons = [
    {
      id: 1,
      name: "LinkedIn",
      image: linkedin,
      url: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAYQRAYBz9jEogyxYeKlye59BsrDK5qMfd4&keywords=luke%20west%2C%20mba&origin=RICH_QUERY_SUGGESTION&position=0&searchId=7ca5b8f4-1da7-404f-bd99-acb5649c1679&sid=oSW&spellCorrectionEnabled=false",
    },

    {
      id: 4,
      name: "X",
      image: twitter,
      url: "https://x.com/collegiumbuilt?t=6agu15xYfhvyNthNMTfOWA&s=09",
    },
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
        <a href={smedia.url} target="blank">
          <img src={smedia.image} alt={smedia.name} />
        </a>
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
                At Collegium, our commitment is to drive efficiency and //
                collaboration in the construction ecosystem.
              </p>
            </div>
            <div className="sfooter-socialmedia">
              <p>Follow us on social media: </p>
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
                <strong>Headquarters:</strong>
                <br />
                302, 10526 Jasper Avenue <br />
                Edmonton, AB, Canada T5J 1Z7
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
