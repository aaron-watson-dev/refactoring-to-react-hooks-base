import React, {useState} from "react";
import Select from "react-select"
import {subscriptions} from "../../mocks";
import {sales} from "../../mocks";
import DataFetching from "../../common/components/Fetching";

const DataFetchingContainer = () => {
    let optionsForSelect;
    optionsForSelect = [
        {value: "Sales", label: "Sales"},
        {value: "Subscriptions", label: "Subscriptions"},
        {value: "Error", label: "Error"}
    ];

    const [selectedEndpoint, setSelectedEndpoint] = useState(null);

    function handleSelectChange(e) {
        setSelectedEndpoint(e.value)
    }

    return (
        <>
            <Select onChange={handleSelectChange}
                    label="Please select a chart"
                    id="select-chart"
                    options={optionsForSelect}
            />

            {selectedEndpoint ?  <DataFetching endpoint={selectedEndpoint} /> : "Please select an option"}
        </>
    )
};

export default DataFetchingContainer;
