import {combineReducers} from 'redux';
import portfolio from './portfolioReducer';
import testimonial from './testimonialReducer'

export default combineReducers({
    portfolio,
    testimonial,
});
