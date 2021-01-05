/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import Bottom from './Bottom';
import Input from './Input';
import Lists from './Lists';
import "./Todo.css";
function Todo() {
  const [{ theme }, dispatch] = useStateValue()
  return (
    <div className="todo" style={{
      background: theme && "#202C39", borderRadius: theme && "1%", boxShadow: theme && "inset 2.7px 2.7px 8px #1A242E, inset -2.7px -2.7px 8px #263444"
    }}>
      <Input />
      <Lists />
      <Bottom />
    </div>
  )
}
export default Todo
