import { Tooltip } from '@material-ui/core';
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import "./Input.css";
function Input() {
  // eslint-disable-next-line no-unused-vars
  const [{ tasks, theme }, dispatch] = useStateValue();
  const [details, showDetails] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  // background: #242321;
  // border-radius: 1%;
  // box-shadow: inset 4.8px 4.8px 27px #1A252D, inset -4.8px -4.8px 27px #364B5D;
  const submit = () => {
    if (details === true && title.length > 1 && date.length > 1) {
      dispatch({
        type: "SUBMIT_TASK",
        contents: {
          title: title,
          date: date,
          note: note,
          id: tasks.length + 1,
          action: false
        }
      })
      setTitle('');
      setDate('');
      setNote('');
      showDetails(false);
    }
    else {
      showDetails(true);
    }
  }
  return (
    <div className="input">
      <div className="input__container">
        <div className="input__bar">
          <div onClick={() => showDetails(!details)}
            style={{
              color: theme && 'white', background: theme && "#283845", borderRadius: theme && "1%", boxShadow: theme && "inset 4.8px 4.8px 25px #1E2A34, inset -4.8px -4.8px 25px #324656"
            }}
          >
            <p>{details ? "Close" : "Add new tasks"}</p>
          </div>
        </div>
        <div className="input__button"
          style={{
            color: theme && 'white', background: theme && "#283845", borderRadius: theme && "1%", boxShadow: theme && "3.6px 3.6px 9px #1A252D, -3.6px -3.6px 9px #364B5D"
          }}
        >
          <p style={{ color: theme && 'white' }} onClick={() => submit()}>Add</p>
        </div>
      </div>
      {details && <div className="input__details">
        <Tooltip title="Enter the task title" placement="left">
          <input type="text" placeholder={"Task title"} onChange={(e) => setTitle(e.target.value)} />
        </Tooltip>
        <Tooltip title="Enter the last date for the taks" placement="left">
          <input type="date" placeholder="Date" value={date}
            min={new Date().toLocaleDateString()} max="2999-12-31" onChange={(e) => setDate(e.target.value)} />
        </Tooltip>
        <Tooltip title="Add notes to your task" placement="left">
          <input type="text" placeholder={"Description (optional)"} onChange={e => setNote(e.target.value)} />
        </Tooltip>
      </div>}
    </div>
  )
}

export default Input
