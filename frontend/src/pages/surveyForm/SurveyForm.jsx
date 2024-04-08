import { useEffect, useState } from "react";
import "./surveyform.css";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import InterimNavbar from "../../components/navbar/InterimNavbar";

const SurveyForm = () => {
  const [responses, setResponses] = useState({});
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [formVisible, setFormVisible] = useState(true);
  const [resultVisible, setResultVisible] = useState(false);

  const handleResponseChange = (questionId, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };
  const handleUserDetailsChange = (e) => {
    const { id, value } = e.target;
    const blockedDomains = [
      "gmail.com",
      "yahoo.com",
      "yahoomail.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "mail.com",
      "yandex.com",
    ];
    if (id === "user-email") {
      const domain = value.substring(value.lastIndexOf("@") + 1);
      if (blockedDomains.includes(domain)) {
        alert(
          `Please input your company's email address, ${domain} email address is not allowed.`
        );
        return;
      }
    }
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      name: document.getElementById("user-name").value,
      email: document.getElementById("user-email").value,
      company: document.getElementById("user-company").value,
    }));
  };
  const questions = [
    {
      id: 1,
      question:
        "It is understood that Collegium is not a bolt-on to traditional Design & Construction workflows and contract structures, and that Collegium is an alternative to Design-Bid-Build, Design-Build, Construction Management, and other traditional procurement models.  (Y/N)",
    },
    {
      id: 2,
      question:
        "It is understood that there are no Generally Held Contracts in a Collegium project.  (Y/N)",
    },
    {
      id: 3,
      question:
        "Your company is comfortable utilizing Alliance Contracts that share Risk and Reward between Owner and Project Team.  (Y/N)",
    },
    {
      id: 4,
      question:
        "Your company is prepared to engage a Design team (Architecture, Engineering, etc) that is knowledgeable and enabled to build data-rich 3D content.  (Y/N)",
    },
    {
      id: 5,
      question:
        "Your company will provide a retainer to ensure the Design team is properly funded.  The budget will be calculated and mutually agreed on before work begins.  (Y/N)",
    },
    {
      id: 6,
      question:
        "The Project Team will follow the Collegium project execution process and not attempt to blend traditional practices that increase cost, schedule, and risk.  (Y/N)",
    },
    {
      id: 7,
      question:
        "It is understood that all procurement and payment functions will be processed through the Collegium Platform.  (Y/N)",
    },
    {
      id: 8,
      question:
        "Labour, material, and equipment will be disaggregated to maximize procurement optionality and advantages.  (Y/N)",
    },
    {
      id: 9,
      question:
        "All payments will be disintermediated and paid directly to Vendors/Project Partners to ensure velocity of working capital.  (Y/N)",
    },
    {
      id: 10,
      question:
        "The role of Project Management, Scheduling, and Logistics will be procured as a Fee-for-Service contract and the chosen Organization will be party to the Alliance Contract.  (Y/N)",
    },
  ];
  const getResponseCounts = () => {
    const counts = { Yes: 0, No: 0 };
    Object.values(responses).forEach((response) => {
      counts[response]++;
    });

    return counts;
  };
  const Question = ({ question }) => {
    const questionId = question.id;
    return (
      <div className="question-answer-individual">
        <div className="question">
          <span>{question.id}.</span>
          <br />
          <p>{question.question}</p>
        </div>
        <div className="answer">
          <label>
            Yes &emsp;
            <input
              type="radio"
              name={`question-${questionId}`}
              value="Yes"
              checked={responses[questionId] === "Yes"}
              onChange={() => handleResponseChange(questionId, "Yes")}
              required
            />
          </label>
          <label>
            No &emsp;
            <input
              type="radio"
              name={`question-${questionId}`}
              value="No"
              checked={responses[questionId] === "No"}
              onChange={() => handleResponseChange(questionId, "No")}
              required
            />
          </label>
        </div>
      </div>
    );
  };

  const [match, setMatch] = useState("");
  const [resultHigh, setResultHigh] = useState(false);
  const [resultMedium, setResultMedium] = useState(false);
  const [resultLow, setResultLow] = useState(false);
  const surveyFormSubmit = (e) => {
    e.preventDefault();
    console.log("User Details: ", userDetails);
    console.log("Responses: ", responses);
    const counts = getResponseCounts();
    console.log("Counts: ", counts);
    setMatch((counts.Yes / 10) * 100);

    if (counts.Yes >= 8) {
      setResultHigh(true);
      setResultMedium(false);
      setResultLow(false);
    } else if (counts.Yes <= 7 && counts.Yes >= 6) {
      setResultMedium(true);
      setResultHigh(false);
      setResultLow(false);
    } else if (counts.Yes <= 5) {
      setResultLow(true);
      setResultHigh(false);
      setResultMedium(false);
    }
    // setFormVisible(false);
    setResultVisible(true);
    sendEmail();
  };
  const navigate = useNavigate();
  const handleContactButton = () => {
    navigate("/contactus");
  };

  const sendEmail = () => {
    const counts = getResponseCounts();
    const data = `
    Name: ${userDetails.name}
    Email: ${userDetails.email}
    Company: ${userDetails.company}
    Total Yes: ${counts.Yes}
    Total No: ${counts.No}
    Match: ${(counts.Yes * 100) / 10}%`;
    console.log("data to be sent: ", data);
    emailjs
      .send(
        "service_cb7ru17",
        "template_3tke4lf",
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
  const closeResultPopout = () => {
    setResultVisible(false);
    window.scrollTo(0, 0);
    window.location.reload();
  };
  return (
    <div className="survey-section">
      <InterimNavbar background="transparent" color="black" />
      <div className="survey">
        {formVisible && (
          <div className="header">
            <h3 className="title">
              Buyers Guide – Is a Collegium Project right for you?
            </h3>
            <p className="sub-title">
              Collegium is an exciting new process and technology platform for
              building Real Estate. We are collapsing cost, schedule, and risk
              for Real Estate Developers by 20% or more, but to do so, we need
              to do a few things differently. Answer the questions below to see
              if a Collegium Project is right for your organization.
            </p>
          </div>
        )}

        {formVisible && (
          <form
            className="survey-form"
            id="survey-form"
            onSubmit={surveyFormSubmit}
          >
            <div className="user-details">
              <div className="user-details-guide">
                <p>
                  Please provide the following information prior to
                  participating in the survey:
                </p>
              </div>
              <div className="user-details-fields">
                <label htmlFor="user-name">
                  Name:
                  <br />
                  <input
                    id="user-name"
                    type="text"
                    value={userDetails.name}
                    onChange={handleUserDetailsChange}
                    required
                  />
                </label>
                <br />
                <label htmlFor="user-email">
                  Email (Business Email):
                  <br />
                  <input
                    id="user-email"
                    type="email"
                    value={userDetails.email}
                    onChange={handleUserDetailsChange}
                    required
                  />
                </label>
                <br />
                <label htmlFor="user-company">
                  Company:
                  <br />
                  <input
                    id="user-company"
                    type="text"
                    value={userDetails.company}
                    onChange={handleUserDetailsChange}
                    required
                  />
                </label>
                <br />
              </div>
            </div>
            {questions.map((question) => (
              <Question key={question.id} question={question} />
            ))}
            <div className="survey-button-div">
              <button className="survey-submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      {resultVisible && (
        <div className="survey-result">
          <div className="result-popout">
            <h3>{match}% Match!</h3>
            {resultHigh && (
              <div className="survey-result-high">
                <p>
                  Perfect {userDetails.name}! You are an excellent fit for
                  Collegium projects. We will contact you for the next steps!
                </p>
                <button onClick={closeResultPopout}>Close</button>
              </div>
            )}
            {resultMedium && (
              <div className="survey-result-medium">
                <p>
                  Thanks {userDetails.name}! Let's arrange a meeting to discuss
                  your project. Would you like us to reach out to you? Feel free
                  to visit our Contact Us page and send us a message.
                </p>
                <div className="buttons">
                  <button onClick={handleContactButton}>Contact Us</button>
                  <button onClick={closeResultPopout}>Close</button>
                </div>
              </div>
            )}
            {resultLow && (
              <div className="survey-result-low">
                <p>
                  Thanks {userDetails.name}! It looks like you're comfortable
                  with traditional design and construction processes. Would you
                  like us to reach out to you? Feel free to visit our Contact Us
                  page and send us a message.
                </p>
                <div className="buttons">
                  <button onClick={handleContactButton}>Contact Us</button>
                  <button onClick={closeResultPopout}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <SFooter />
    </div>
  );
};

export default SurveyForm;
