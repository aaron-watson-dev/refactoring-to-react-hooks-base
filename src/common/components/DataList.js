/* jshint esversion: 6 */
import React from "react";

function DataList({listData}) {
    return (
        <ul>
            {
                listData && listData.map(
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
