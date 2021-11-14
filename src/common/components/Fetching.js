import React from "react";
import {useReducer, useState, useEffect} from "react";
import PropTypes from 'prop-types';
import * as Constants from "../constants";
import Loading from "../components/Loading";
import DataList from "../components/DataList";

import DataReducer from "./DataReducer";
const initialState = {
    currentState: Constants.DATA_FETCHING_STATUS.LOADED,
};

function DataFetching ({ endpoint }) {
    const [responseData, setResponseData] = useState([]);

    const [state, dispatch] = useReducer(DataReducer, initialState);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json()
            }).then(json=> {
                setResponseData(json);
            });
    }, [endpoint]);

    return (
        <DataList listData={responseData} />
    );
}

DataFetching.propTypes = {
   endpoint: PropTypes.string.isRequired
};

export default DataFetching;
