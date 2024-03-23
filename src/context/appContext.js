import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
import axios from "axios";
import {
 
} from "./actions";

const initialState = {

};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

//provide all functions in provider



  return (
    <Appcontext.Provider
      value={{
        ...state,
       
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
const useAppContext = () => {
  return useContext(Appcontext);
};
export { AppProvider, initialState, useAppContext };
