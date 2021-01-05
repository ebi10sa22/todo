/* eslint-disable no-unused-vars */
import { Button, Tooltip } from '@material-ui/core';
import { ClearAll } from '@material-ui/icons';
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import "./List.css";
function List({ title, note, date, action, id }) {
  const [{ tasks, theme }, dispatch] = useStateValue();
  const [more, setMore] = useState(false);
  const [description, setDescription] = useState(false);
  const [status, setStatus] = useState(false);
  const text_truncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str?.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  const click = () => {
    setMore(!more);
    setDescription(!description);
  }
  const deleteTask = () => {
    dispatch({
      type: "DELETE_TASK",
      id: id
    })
  }
  const setstatus = (s) => {
    if (s) {
      dispatch({
        type: "SET_FINISHED",
        id: id
      })
    }
  }
  return (
    <div className={`list`} style={{ height: "fit-content", background: theme && "lightgray" }}>
      <div className={`list__contents ${action && "disabled"}`} onClick={() =>  click()}>
        <header className="list__top">
          <Tooltip title="Title" placement={"left"}>
            <p>{text_truncate(title, 19, "...")}</p>
          </Tooltip>
          <Tooltip title={!action ? "Try to finsih the work" : "Keep it up !"} placement={"bottom"}>
            <p>{!action ? "status : ❌😩" : "status : ✅🤩"}</p>
          </Tooltip>
        </header>
        <main className="list__middle">
          <Tooltip title={date} placement={"left"}>
            <p>Last Date : {date}</p>
          </Tooltip>
        </main>
        {description && <footer className="list__bottom">
          <h4>Description :</h4>
          <p>{note}</p>
          <div className="list__finished">
            <p>Have you finsihed this task ???</p>
            <div>
              <Button onClick={() => setstatus(true)} variant="contained" color="primary">Yes</Button>
              <Button onClick={() => setstatus(false)} variant="outlined" color="default" >No</Button>
            </div>
          </div>
        </footer>
        }
      </div>
      <div className="list__icon">
        <Tooltip title={more ? "Click for less" : "Click for more"} placement={"right"}>
          <p onClick={() => click()}>{more ? "▲" : "▼"}</p>
        </Tooltip>
        <Tooltip title="Click here to delete the task" placement={"right"}>
          <p onClick={() => deleteTask()}><ClearAll /></p>
        </Tooltip>
      </div>
    </div>
  )
}

export default List
