/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
import Todo from './Components/Todo';
import { useStateValue } from './StateProvider/StateProvider'

function App() {
  const [{theme}, dispatch] = useStateValue();

  return (
    <div className="app" style={{backgroundColor: theme && "#283845"}}>
      <Todo />
    </div>
  )
}

export default App