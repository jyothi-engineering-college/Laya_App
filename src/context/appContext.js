import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
import { SET_ALLRESULT, SET_RESULT } from "./actions";
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
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allonResult = async () => {
    const q = query(collection(db, "offresults"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      dispatch({ type: SET_ALLRESULT, payload: doc.id });
    });
  };

  const setResult = async (resultId) => {
    const docRef = doc(db, "offresults", resultId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({ type: SET_RESULT, payload: {eventResult:docSnap.data()} });
   } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <Appcontext.Provider
      value={{
        ...state,
        allonResult,
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
