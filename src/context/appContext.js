import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
import { CLEAR_EVENTS, SET_ALLRESULT, SET_RESULT } from "./actions";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

const initialState = {
 eventResult: {},
  eventList: [],
  resultName: "",
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allResult = async (resultType) => {
    clearEvents();
    const q = query(collection(db, resultType));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      dispatch({ type: SET_ALLRESULT, payload: doc.id });
    });
   
  };

  const setResult = async (resultType,resultId) => {
    const docRef = doc(db, resultType, resultId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({ type: SET_RESULT, payload: {eventResult:docSnap.data(),eventName:docSnap.id} });
   } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const clearEvents = async () => {
    dispatch({ type: CLEAR_EVENTS, payload: [] });
  };
  return (
    <Appcontext.Provider
      value={{
        ...state,
        allResult,
        setResult,
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
