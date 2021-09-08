import React from "react";

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [access_token, setAccessToken] = React.useState("");
  let states = {
    access_token,
    setAccessToken,
  };
  return <Context.Provider value={states}>{children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
