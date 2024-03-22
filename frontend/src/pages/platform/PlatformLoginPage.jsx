import SFooter from "../../components/footer/SFooter";
import InterimNavbar from "../../components/navbar/InterimNavbar";
import "./platformloginpage.css";

const PlatformLoginPage = () => {
  return (
    <>
      <InterimNavbar background="white" color="black" />
      <div className="platform-message">
        <h2>Coming soon...</h2>
        <p>
          Our app is currently in its beta version, undergoing rigorous testing
          and refinement. Stay tuned as we prepare for its official launch in
          the near future.
        </p>
      </div>
      <SFooter />
    </>
  );
};

export default PlatformLoginPage;
