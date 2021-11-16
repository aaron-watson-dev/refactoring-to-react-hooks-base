/* jshint esversion: 6 */
import React, {useReducer} from "react";
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import DataList from "../components/DataList";
import Loading from "../../common/components/Loading";
import DataReducer from "../../common/components/DataReducer";
import * as Constants from "../constants";

const initialState = {
    currentState: Constants.DATA_FETCHING_STATUS.LOADING,
    selectedEndpoint: null,
    currentData: null
};

function DataFetching ({ endpoint }) {
    const [state, dispatch] = useReducer(DataReducer, initialState);

    useEffect(() => {
        dispatch( { type: "LOADING", payload: null} );

        fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`)
            .then(response => {
                if (!response.ok)  {
                    throw new Error();
                }
                return response.json();
            }).then(json=> {
                dispatch( { type: "SET-RESPONSE", payload: json} );
            }). catch((error) => {
                console.log(error);
                dispatch( { type: "ERROR", payload: null} );
            });
    }, [endpoint]);

    if (state.currentState === Constants.DATA_FETCHING_STATUS.LOADED) {
        return <DataList listData={state.currentData} />;
    }
    else if (state.currentState === Constants.DATA_FETCHING_STATUS.ERROR) {
        return "Sorry, there was an error fetching your data"
    }
    else if (state.currentState === Constants.DATA_FETCHING_STATUS.LOADING) {
        return <Loading />
    }
}

DataFetching.propTypes = {
   endpoint: PropTypes.string.isRequired
};

export default DataFetching;
