import { CLEAR_EVENTS, SET_ALLRESULT, SET_RESULT } from "./actions";
const reducer = (state, action) => {
  if (action.type === SET_ALLRESULT) {
    return {
      ...state,
      eventList: [...state.eventList, action.payload],
    };
  }

  if (action.type === SET_RESULT) {
    return {
      ...state,
      eventResult: action.payload.eventResult,
      resultName: action.payload.eventName,
    };
  }
  if (action.type === CLEAR_EVENTS) {
    return {
      ...state,
      eventList: action.payload,
    };
  }
};

export default reducer;
