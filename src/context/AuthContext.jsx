import React, { useReducer, useContext } from "react";
import { initialState, reducer } from "./reducer";

const AuthStateContext = React.createContext();
const AuthDispatcherContext = React.createContext();

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw Error("useAuthState state must be used");
  }
  return context;
};
export const useAuthDispatch = () => {
  const context = useContext(AuthDispatcherContext);
  if (!context) {
    throw Error("useAuthDispatch state must be used");
  }
  return context;
};

export const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatcherContext.Provider value={dispatch}>
        {children}
      </AuthDispatcherContext.Provider>
    </AuthStateContext.Provider>
  );
};
