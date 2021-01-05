// Importing 
import React, { useContext, useReducer, createContext } from "react";

// DataLayer
export const StateContext = createContext();

// Providing data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Getting data from data layer
export const useStateValue = () => useContext(StateContext)