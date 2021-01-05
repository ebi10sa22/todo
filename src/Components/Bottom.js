import React, { useEffect, useState } from 'react'
import "./Bottom.css"
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useStateValue } from '../StateProvider/StateProvider';
import { Tooltip } from '@material-ui/core';
function Bottom() {
  const [{ theme }, dispatch] = useStateValue();
  const [darkmode, setDarkMode] = useState(false);
  useEffect(() => {
    darkmode ? dispatch({
      type: "SET_DARK",
    }) : dispatch({
      type: "SET_LIGHT",
    });
  }, [darkmode, dispatch]);

  return (
    <div className="bottom" style={{ background: theme && "lightgray" }}>
      <div className="bottom__inner">
        <a href="https://github.com/ebi10sa22">Github</a>
        <Tooltip title={theme ? "Light mode" : "Dark mode"} placement="top">
        <p onClick={() => setDarkMode(!darkmode)}>
          {theme ?
            <WbIncandescentIcon /> :
            <Brightness4Icon />
          }</p>
          </Tooltip>
      </div>
    </div>
  )
}

export default Bottom
