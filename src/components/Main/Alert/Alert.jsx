import { useEffect, useContext } from "react";
import checkmark from "../../../assets/checkmark.png";
import "./alert.css";
import {MainContext} from "../Main";

const Alert = () => {
  const {dispatch, message} = useContext(MainContext)

  useEffect(() => {
    setTimeout(() => dispatch({ type: "REMOVE_MODAL" }), 3000);
  }, [dispatch]);

  return (
    <div className="alert-modal-overlay">
      <div className="alert-modal">
        <div className="message">
          <p>{message}</p>
          <img src={checkmark} alt="Green Checkmark" />
        </div>
        <div className="line">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
