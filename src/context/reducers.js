import { SET_RESULT } from "./actions";
const reducer = (state, action) => {
  if (action.type === SET_RESULT) {
    return {
      ...state,
        first: action.payload.first,
        second: action.payload.second,
        third: action.payload.third,
    };
  }

};

export default reducer;
