import {FETCH_TESTIMONIAL,ADD_TESTIMONIAL} from './../constants/actionTypes'
export default (testimonial = [], action) => {
  switch (action.type) {
    case FETCH_TESTIMONIAL:
      return action.payload;
      case ADD_TESTIMONIAL:
        return [...testimonial,action.payload];
    default:
      return testimonial;
  }
};
