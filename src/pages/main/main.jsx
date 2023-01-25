import logo1 from "../../try1 yop.png";

import { useState } from "react";
import "./main.css";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState("Hello.");
  const handleMouseEnter = (e) => {
    setShowText("About");
  };
  const handleMouseLeave = (e) => {
    setShowText("Hello.");
  };

  const [showText1, setShowText1] = useState("I am");
  const handleMouseEnter1 = (e) => {
    setShowText1("Projects");
  };
  const handleMouseLeave1 = (e) => {
    setShowText1("I am");
  };

  const [showText2, setShowText2] = useState("Alan");
  const handleMouseEnter2 = (e) => {
    setShowText2("Contact");
  };
  const handleMouseLeave2 = (e) => {
    setShowText2("Alan");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col col-7" id="menu">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="titles"
            >
              {showText}
            </div>
            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              onClick={(e) => navigate("projects")}
              className="titlesred"
            >
              {showText1}
            </div>
            <div
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className="titlesred"
            >
              {showText2}
            </div>
          </div>
          <div className="col col-5">
            <img
              loading="lazy"
              src={logo1}
              className="App-logo"
              alt="myPhoto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
