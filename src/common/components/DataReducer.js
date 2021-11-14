import * as Constants from "../constants"
export default function DataReducer (state, action) {
   switch(action.type)  {
       case Constants.DATA_FETCHING_STATUS.LOADING:
           return {
              ...state,
               currentState: Constants.DATA_FETCHING_STATUS.LOADING
           };
       case Constants.DATA_FETCHING_STATUS.LOADED:
           return  {
              ...state,
               currentState: Constants.DATA_FETCHING_STATUS.LOADED
           };
       case Constants.DATA_FETCHING_STATUS.ERROR:
           return {
               ...state,
               currentState: Constants.DATA_FETCHING_STATUS.ERROR
           };
       default:
           return state;
   }
}
