import React from "react";
import {useState, useEffect} from "react";

function DataFetching (props) {
    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {
        fetch("/api/" + props.endpoint)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json()
            }).then(json=> {setApiResponse(json); console.log(apiResponse);});
    }, [props.endpoint]);

    return (
        <div>
            <ul>
                {
                    apiResponse ? apiResponse.map((response) => ( <li>{response.timestamp} - {response.amount}</li>)) : (<li />)
                }
            </ul>
        </div>
    )
}

export default DataFetching;
