import {FETCH_TESTIMONIAL,ADD_TESTIMONIAL} from './../constants/actionTypes'
import * as api from '../api/index';
//Get request
export const getTestimonial=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchTestimonial();
        console.log("Testimonial loaded")
        dispatch({type:FETCH_TESTIMONIAL,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
//Create Request
export const createTestimonial = (testimonial_item) => async (dispatch) => {
    try {
      const  {data}  = await api.createTestimonial(testimonial_item);
      dispatch({ type: ADD_TESTIMONIAL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };