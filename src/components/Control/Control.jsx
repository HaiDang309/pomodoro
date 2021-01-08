import React, { memo, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Howl, Howler } from "howler";
import buttonClick from "../../sound/buttonClick.mp3";
import "./control.css";



const Control = memo((props) => {
  const colorOfControlBtn = useSelector((state) => state.clockReducer.colorOfControlBtn);
  const useStyles = makeStyles({
    typography: {
      color: colorOfControlBtn,
    },
  });
  const classes = useStyles();
  const soundButtonClick = () => {
    const sound = new Howl({
      src: buttonClick,
    });
    sound.play();
  };
  const [isStart, setIsStart] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    soundButtonClick();
    dispatch({ type: "START", isStart: isStart });
    setIsStart(!isStart);
  };
  Howler.volume(10.0);
  return (
    <div className="control">
      <Button
        onClick={handleClick}
        className={`${classes.typography} ${
          !isStart ? "control__buttonActive" : "control__buttonNotActive"
        }`}
      >
        {isStart ? "STOP" : "START"}
      </Button>
    </div>
  );
});

export default Control;
