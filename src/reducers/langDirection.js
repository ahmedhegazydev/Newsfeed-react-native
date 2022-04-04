import * as types from "../actions/ActionTypes";

const initialState = {
  rtl: false,
  lang: "en-US",
  // lang: "ar-US",
};

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.CHANGE_DIRECTION:
      return {
        ...state,
        // rtl: action.data.RTLStatus.RTL,
        // lang: action.data.RTLStatus.lang,
        rtl: action.data.RTL,
        lang: action.data.lang,
      };
    default:
      return state;
  }
};
