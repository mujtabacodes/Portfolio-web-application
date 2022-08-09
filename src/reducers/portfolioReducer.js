import {FETCH_PORTFOLIO,ADD_PORTFOLIO} from './../constants/actionTypes'
export default (portfolios = [], action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return action.payload;
    
    default:
      return portfolios;
  }
};
