import { servicesActionTypes } from './action-types';

const initialState = {
  title: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case servicesActionTypes.SERVICE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default servicesReducer;
