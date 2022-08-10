import {FETCH_PORTFOLIO,ADD_PORTFOLIO} from './../constants/actionTypes'
export default (portfolio = [], action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return action.payload;
      case ADD_PORTFOLIO:
        return [...portfolio,action.payload];
    default:
      return portfolio;
  }
};
