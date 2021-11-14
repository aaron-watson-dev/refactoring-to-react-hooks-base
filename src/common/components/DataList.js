import React from "react";
import DataFetching from "./Fetching";

function DataList({listData}) {
    return (
        <ul>
            {
                listData.map(
                    (data) => (
                        <li key={data.timestamp}>
                            {data.timestamp} - {data.amount}
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default DataList;
