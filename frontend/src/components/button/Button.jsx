import "./button.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const { label, color, width,to } = props;
  const navigate = useNavigate();

  const myButtonStyle = {
    color: color || "white",
    width: width || "auto",
  };
  
  const myButtonReflectionStyle = {
    color: "transparent"
  };

  const handleClick = () => {
    navigate(to);
  };
  return (
    <div className="myButton-container">
      <button className="myBttn" style={myButtonStyle} onClick={handleClick}>
        {label}
      </button>
      <button className="myBttn-reflection" style={myButtonReflectionStyle} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
