import { Tooltip } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import List from './List';
import "./Lists.css";
function Lists() {
  const [{ theme, tasks }, dispatch] = useStateValue();
  return (
    <div className="lists" style={{
      background: theme && "#283845", borderRadius: theme && "1%", boxShadow: theme && "inset 5.71px 5.71px 26px #212E39, inset -5.71px -5.71px 26px #2F4251"

    }}>
      {
        tasks?.map((task) => (
          <List date={task.date} note={task.note} title={task.title} key={task.id} id={task.id} action={task.action} />
        ))
      }
      {typeof tasks?.contents?.task !== undefined && tasks.length === 0 ? <p style={{ marginTop: 20,color:theme && "white",fontWeight:300 }}>No tasks found</p> : <p onClick={() => dispatch({
        type: "DELETE_ALL"
      })}><Tooltip title="Delete Every Task" placement="bottom" interactive><DeleteForever /></Tooltip></p>}
    </div>
  )
}

export default Lists
