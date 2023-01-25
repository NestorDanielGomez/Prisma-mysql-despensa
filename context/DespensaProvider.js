import { useState, useEffect, createContext } from "react";

const DespensaContext = createContext();

const DespensaProvider = ({ children }) => {
  return (
    <DespensaContext.Provider value={{}}>{children}</DespensaContext.Provider>
  );
};

export { DespensaProvider };

export default DespensaContext;
