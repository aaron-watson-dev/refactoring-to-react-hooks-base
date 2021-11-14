import React from "react";
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import DataList from "../components/DataList";

function DataFetching ({ endpoint }) {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json()
            }).then(json=> {
                setResponseData(json);
            });
    }, [endpoint]);

    return <DataList listData={responseData} />;
}

DataFetching.propTypes = {
   endpoint: PropTypes.string.isRequired
};

export default DataFetching;
