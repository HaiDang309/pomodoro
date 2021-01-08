import React, { memo, useState } from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "./navbarClock.css";

const navbarClock = memo((props) => {
  const [whichActive, setWhichActive] = useState("1");
  const dispatch = useDispatch();
  var bodyElement = document.body;
  const setActive = (number) => {
    switch (number) {
      case "1":
        dispatch({
          type: "CHANGE_COLOR_OF_BUTTON",
          colorOfControlBtn: "rgb(219, 82, 77)",
        });
        bodyElement.style.backgroundColor = "rgb(219, 82, 77)";
        setWhichActive(number);
        break;
      case "2":
        dispatch({
          type: "CHANGE_COLOR_OF_BUTTON",
          colorOfControlBtn: "rgb(70, 142, 145)",
        });
        bodyElement.style.transition = "all 1s";
        bodyElement.style.backgroundColor = "rgb(70, 142, 145)";
        setWhichActive(number);
        break;
      case "3":
        dispatch({
          type: "CHANGE_COLOR_OF_BUTTON",
          colorOfControlBtn: "rgb(67, 126, 168)",
        });
        bodyElement.style.backgroundColor = "rgb(67, 126, 168)";
        setWhichActive(number);
        break;
      default:
        break;
    }
  };
  return (
    <div className="navbarClock">
      <NavLink className="navbarClock__link" to="/">
        <Button
          id={`${whichActive === "1" ? "active" : ""}`}
          onClick={() => setActive("1")}
          className="navbarClock__button"
        >
          Work
        </Button>
      </NavLink>
      <NavLink className="navbarClock__link" to="/break">
        <Button
          onClick={() => setActive("2")}
          id={`${whichActive === "2" ? "active" : ""}`}
          className="navbarClock__button"
        >
          Break
        </Button>
      </NavLink>
      <NavLink className="navbarClock__link" to="/long-break">
        <Button
          id={`${whichActive === "3" ? "active" : ""}`}
          onClick={() => setActive("3")}
          className="navbarClock__button"
        >
          Long break
        </Button>
      </NavLink>
    </div>
  );
});

export default navbarClock;
