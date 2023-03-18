import backBtn from "./backbuttonpng.png";
import "./backButton.css";
import { useNavigate } from "react-router";

export default function BB() {
  const navigate = useNavigate();
  return (
    <img
      onClick={(e) => navigate(-1)}
      src={backBtn}
      className="customBckBtn"
      alt="customBckBtn"
    />
  );
}
