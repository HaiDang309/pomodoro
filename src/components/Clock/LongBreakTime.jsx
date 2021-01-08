import React, { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const WorkTime = memo((props) => {
  const isStartWorkingTime = useSelector((state) => state.clockReducer.isStart);
  const [minute, setMinute] = useState("15");
  const [second, setSecond] = useState("00");
  const countDown = () => {
    let ss = parseInt(second);
    let mm = parseInt(minute);
    if (mm === 0 && ss === 0) {
      return;
    }
    if (ss === 0) {
      ss = 60;
      mm--;
    }
    ss--;
    if (ss < 10) {
      ss = "0" + ss;
      setSecond(ss);
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    setSecond(ss);
    setMinute(mm);
  };

  useEffect(() => {
    let countDownInterval;
    if (isStartWorkingTime) {
      countDownInterval = setInterval(() => countDown(), 1000);
    }

    if (second === "00" && minute === "00") {
      clearInterval(countDownInterval);
    }
    return () => clearInterval(countDownInterval);
  });
  return (
    <div className="workTime">
      <h1>
        {minute}
        <span> : </span>
        {second}
      </h1>
    </div>
  );
});

export default WorkTime;
