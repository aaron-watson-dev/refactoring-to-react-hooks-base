import React from "react";
import Select from "react-select"
import {useState} from "react";
import {subscriptions} from "../../mocks";
import {sales} from "../../mocks";
import DataFetching from "../../common/components/Fetching"

const DataFetchingContainer = () => {
    const optionsForSelect = [
        { value: "Sales", label: "Sales" },
        { value: "Subscriptions", label: "Subscriptions" }
    ]

    const [selectedEndpoint, setSelectedEndpoint] = useState(null);

    function handleSelectChange(e) {
        setSelectedEndpoint(e.value);
        console.log("Data Here")
    }

    return (
        <>
            <Select onChange={handleSelectChange}
                    label="Please select a chart"
                    id="select-chart"
                    options={optionsForSelect}
            />

            {selectedEndpoint ?  <DataFetching endpoint={selectedEndpoint} /> : null }
        </>
    )
}

export default DataFetchingContainer;