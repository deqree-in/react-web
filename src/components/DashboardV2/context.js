import React from "react";

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [active, setActive] = React.useState("home");
  let headerRef = React.useRef(null);
  let states = {
    active,
    setActive,
    headerRef,
  };
  return <Context.Provider value={states}>{children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
