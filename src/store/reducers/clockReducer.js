const INITIAL_STATE = {
  isStart: false,
  colorOfControlBtn: "rgb(219 82 77)",
  work: '25',
  break: '05',
  longBreak: '15',
};

const clockReducer = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case "START":
      return { ...state, isStart: !action.isStart };
    case "CHANGE_COLOR_OF_BUTTON":
      return {
        ...state,
        colorOfControlBtn: action.colorOfControlBtn,
      };
    case "SET_TIME":
      return {
        ...state,
        work: action.payload.work,
        break: action.payload.break,
        longBreak: action.payload.longBreak,
      };
    default:
      return { ...state };
  }
};

export default clockReducer;
