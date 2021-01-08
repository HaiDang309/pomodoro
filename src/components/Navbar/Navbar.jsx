import React, { memo , useState, useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Button, Dialog, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css'
const Navbar = memo(props => {
    const colorOfBorderBottom = useSelector(state => state.clockReducer.colorOfBorderBottom);
    const [isOpen, setIsOpen] = useState(false);
    const [_work, setWork] = useState('25');
    const [_break, setBreak] = useState('05');
    const [_long_break, setLongBreak] = useState('15');
    const dispatch = useDispatch();
    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
      dispatch({
        type: "SET_TIME",
        payload: {
          work: _work,
          break: _break,
          longBreak: _long_break,
        },
      });
        setIsOpen(false);
    }
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <h1>Pomodoro</h1>
        </div>
        <div className="navbar__settings">
          <Button onClick={handleOpen} className="navbar__button">
            <SettingsIcon className="navbar__icon" />
            Settings
          </Button>
          <Dialog open={isOpen}>
            <div className="navbar__settingDialog">
              <h1>TIMER SETTING</h1>
              <h3>Time (minutes)</h3>
              <div
                className="navbar_settingDialog-time"
              >
                <TextField
                  onChange={(e) => setWork(e.target.value)}
                  className="navbar_settingDialog-textField"
                  variant="outlined"
                  label="WORK"
                  placeholder="25"
                />
                <TextField
                  onChange={(e) => setBreak(e.target.value)}
                  className="navbar_settingDialog-textField"
                  variant="outlined"
                  label="BREAK"
                  placeholder="05"
                />
                <TextField
                  onChange={(e) => setLongBreak(e.target.value)}
                  className="navbar_settingDialog-textField"
                  variant="outlined"
                  label="LONG BREAK"
                  placeholder="15"
                />
              </div>
            </div>
            <Button
              className="navbar_settingDialog-button"
              type="submit"
              onClick={handleClose}
            >
              OK
            </Button>
          </Dialog>
        </div>
      </div>
    );
})

export default Navbar;