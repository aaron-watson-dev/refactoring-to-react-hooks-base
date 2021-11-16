/* jshint esversion: 6 */
import * as Constants from "../constants";

export default function DataReducer (state, action) {
   switch(action.type)  {
       case "SET-RESPONSE": {
           return {
               ...state,
               currentData: action.payload,
               currentState: Constants.DATA_FETCHING_STATUS.LOADED
           }
       }
       case "ERROR": {
           return {
               ...state,
               currentState: Constants.DATA_FETCHING_STATUS.ERROR
           };
       }
       case "LOADING": {
           return {
               ...state,
               currentState: Constants.DATA_FETCHING_STATUS.LOADING
           };
      }
      default:
           return state;
   }
}
