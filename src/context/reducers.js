import { SET_ALLRESULT, SET_RESULT } from "./actions";
const reducer = (state, action) => {
  if (action.type === SET_RESULT) {
    return {
      ...state,
        first: action.payload.first,
        second: action.payload.second,
        third: action.payload.third,
    };
  }
    if (action.type === SET_ALLRESULT) {
      return {
        ...state,
        eventList: [...state.eventList, action.payload],
      };
    }

};

export default reducer;
