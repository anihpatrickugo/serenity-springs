"use client";

import { createContext, useReducer } from "react";

export const MobileMenu = createContext("");

const reducer = (state, action) => {
  switch (action) {
    case "open":
      return (state = true);

    case "close":
      return (state = false);

    default:
      return state;
  }
};

const MenuContextProvider = ({ children }) => {
  const [menu, dispatch] = useReducer(reducer, false);
  return (
    <MobileMenu.Provider value={{ menu, dispatch }}>
      {children}
    </MobileMenu.Provider>
  );
};

export default MenuContextProvider;
