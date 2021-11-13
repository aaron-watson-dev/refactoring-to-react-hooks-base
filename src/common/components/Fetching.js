import React from "react";
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';

function DataFetching ({ endpoint }) {
    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json()
            }).then(json=> {
                setApiResponse(json);
            });
    }, [endpoint]);

    return (
        <div>
            <ul>
                {
                    apiResponse.map(
                        (response) => (
                            <li key={response.timestamp}>
                                {response.timestamp} - {response.amount}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

DataFetching.propTypes = {
   endpoint: PropTypes.string.isRequired
};

export default DataFetching;
