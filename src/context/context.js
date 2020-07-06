import React from "react";

export function createContext() {
  const context = React.createContext(undefined);

  function useContext() {
    const useContext = React.useContext(context);
    if (!useContext)
      throw new Error("useContext must be inside a Provider with a value");
    return useContext;
  }

  return [useContext, context.Provider];
}
