import { useState } from "react";
import "./scontactus.css";
import contactUs from "../../images/contactUs/contactUs.jpg";
import emailjs from "emailjs-com";
import InterimNavbar from "../../components/navbar/InterimNavbar";
import SFooter from "../../components/footer/SFooter";

const SContactUs = () => {
  const userTypeOptions = [
    {
      id: 1,
      userTypeOption: "Real Estate Owner",
    },
    {
      id: 2,
      userTypeOption: "Vendor",
    },
    {
      id: 3,
      userTypeOption: "Architecture",
    },
    {
      id: 4,
      userTypeOption: "Engineering",
    },
    {
      id: 5,
      userTypeOption: "PM & Logistics",
    },
    {
      id: 6,
      userTypeOption: "Building Trades",
    },
    {
      id: 7,
      userTypeOption: "Others",
    },
    {
      id: 8,
      userTypeOption: "Email",
    },
    {
      id: 9,
      userTypeOption: "Call",
    },
  ];

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    description: "",
  });
  const [userType, setUserType] = useState([]);

  const handleContactFormChange = (e) => {
    e.preventDefault();
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      fullName: document.getElementById("fullName").value,
      company: document.getElementById("company").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      description: document.getElementById("description").value,
    }));
  };

  const handleUserTypeChange = (typeOption) => {
    setUserType((prevType) => {
      if (prevType.includes(typeOption)) {
        // If typeOption already exists, remove it
        return prevType.filter((option) => option !== typeOption);
      } else {
        // If typeOption doesn't exist, add it
        return [...prevType, typeOption];
      }
    });
  };
  const handleContactUsFormSubmit = () => {
    // e.preventDefault();
    console.log("Entered details: ", userDetails);
    console.log(
      "User Type: ",
      userType.filter((type) => type !== "Email" && type !== "Call").join("\n")
    );
    const sendEmail = () => {
      const data = `
      Full Name: ${userDetails.fullName}
      Company: ${userDetails.company}
      Email: ${userDetails.email}
      Phone: ${userDetails.phone}
      Description: ${userDetails.description}
      Company Category: ${userType
        .filter((type) => type !== "Email" && type !== "Call")
        .join(", ")}
      The user prefered to contact them through: ${userType
        .filter((type) => type === "Email" || type === "Call")
        .join(", ")}`;
      console.log("data to be sent: ", data);
      emailjs
        .send(
          "service_s780a8o",
          "template_gwl5rvp",
          { message: data },
          "oo2yhgSjBTsgG_3F5"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    };
    sendEmail();
  };
  const UserTypeOptions = ({ option }) => {
    const optionId = option.id;
    return (
      <>
        <input
          type="checkbox"
          id={`option-${optionId}`}
          name={`option-${optionId}`}
          value={option.userTypeOption}
          checked={userType.includes(option.userTypeOption)}
          onChange={() => handleUserTypeChange(option.userTypeOption)}
        />
        <label>
          {option.userTypeOption}
          <br />
        </label>
      </>
    );
  };
  return (
    <>
      <InterimNavbar background="#0a253b" color="white" />
      <div className="contactUs-hero">
        <img src={contactUs} alt="contactUs-hero" />
        <div className="contactUs-hero-text">
          <div className="contactUs-route">
            <p>Home / Contact Us</p>
          </div>
          <div className="contactUs-title">
            <h2>Contact Us</h2>
          </div>
          <div className="contactUs-subtitle">
            <p>Connect with Us Today</p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <form
          className="contact-form"
          id="contactForm"
          onSubmit={handleContactUsFormSubmit}
        >
          <div className="user-info-first">
            <div className="input-divs">
              <label>Full Name *</label>
              <input
                id="fullName"
                type="text"
                value={userDetails.fullName}
                onChange={handleContactFormChange}
                required
              />
            </div>
            <div className="input-divs">
              <label>Company Name *</label>
              <input
                id="company"
                type="text"
                value={userDetails.company}
                onChange={handleContactFormChange}
                required
              />
            </div>
            <div className="input-divs">
              <label>Email (Business Email) *</label>
              <input
                id="email"
                type="email"
                value={userDetails.email}
                onChange={handleContactFormChange}
                required
              />
            </div>
            <div className="input-divs">
              <label>Phone Number *</label>
              <input
                id="phone"
                type="text"
                value={userDetails.phone}
                onChange={handleContactFormChange}
                required
                maxLength="13"
              />
            </div>
          </div>
          <div className="user-info-second">
            <label>
              How can we help you? *
              <br />
              <textarea
                id="description"
                value={userDetails.description}
                onChange={handleContactFormChange}
                required
              />
            </label>
          </div>

          <div div className="company-category">
            <p>What best describes your company?</p>
            {userTypeOptions.slice(0, 7).map((option, index) => (
              <UserTypeOptions key={index} option={option} />
            ))}
          </div>
          <div className="communicationStyle">
            <p>How should we contact you?</p>
            {userTypeOptions.slice(7, 9).map((option, index2) => (
              <UserTypeOptions key={index2} option={option} />
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <SFooter />
    </>
  );
};

export default SContactUs;
