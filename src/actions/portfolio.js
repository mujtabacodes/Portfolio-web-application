import {FETCH_PORTFOLIO,ADD_PORTFOLIO} from './../constants/actionTypes'
import * as api from '../api/index';
//Get request
export const getPortifolio=()=> async(dispatch)=>{
    try {
        const{data}=await api.fetchPortfolio();
        console.log("Porfolio loaded")
        dispatch({type:FETCH_PORTFOLIO,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
//Create Request
export const createPortfolio = (portfolio_item) => async (dispatch) => {
    try {
      const  {data}  = await api.createPortfolio(portfolio_item);
      dispatch({ type: ADD_PORTFOLIO, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };