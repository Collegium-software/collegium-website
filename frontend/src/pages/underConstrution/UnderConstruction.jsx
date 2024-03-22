import SFooter from "../../components/footer/SFooter";
import Navbar from "../../components/navbar/Navbar";

import "./underconstruction.css";
const UnderConstruction = () => {
  return (
    <>
      <div className="under-construction">
        <Navbar background="white" color="black" />
        <div className="underConstruction">
          {/* <img src={underConstruction} alt="Page Under Construction" /> */}
          <h4>Coming soon...</h4>
        </div>
      </div>
      <SFooter />
    </>
  );
};

export default UnderConstruction;
