import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
import { SET_RESULT } from "./actions";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const initialState = {
  first: {
    "class-1": null,
    "house-1": null,
    "name-1": null,
    "position-1": "first",
  },
  second: {
    "class-2": null,
    "house-2": null,
    "name-2": null,
    "position-2": "second",
  },
  third: {
    "class-3": null,
    "house-3": null,
    "name-3": null,
    "position-3": "Third",
  },
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allonResult = async () => {
    const q = query(collection(db, "onresults"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id,doc.data());
    });
  };

    const setResult = async (resultId) => {
     const docRef = doc(db, "onresults", resultId);
     const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch({ type: SET_RESULT, payload: docSnap.data()});

      //  console.log("Document data:", docSnap.data());
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
        setResult
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
