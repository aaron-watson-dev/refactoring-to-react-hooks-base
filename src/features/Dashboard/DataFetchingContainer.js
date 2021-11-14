import React, {useReducer} from "react";
import Select from "react-select"
import {subscriptions} from "../../mocks";
import {sales} from "../../mocks";
import DataFetching from "../../common/components/Fetching"
import * as Constants from "../../common/constants";
import Loading from "../../common/components/Loading";
import DataReducer from "../../common/components/DataReducer";

const initialState = {
    currentState: null,
    selectedEndpoint: null
};

const DataFetchingContainer = () => {
    let optionsForSelect;
    optionsForSelect = [
        {value: "Sales", label: "Sales"},
        {value: "Subscriptions", label: "Subscriptions"}
    ];

    const [state, dispatch] = useReducer(DataReducer, initialState);

    function handleSelectChange(e) {
        dispatch(
            {
                type: Constants.DATA_FETCHING_STATUS.LOADING,
                payload: e.value
            }
        );
    }

    const renderData = () => {
        console.log(state.currentState);
        switch (state.currentState) {
            case Constants.DATA_FETCHING_STATUS.LOADING:
                return <Loading />;
            case Constants.DATA_FETCHING_STATUS.LOADED:
                return <DataFetching endpoint={state.selectedEndpoint} />;
            case Constants.DATA_FETCHING_STATUS.ERROR:
                return "Sorry - there was an error loading your data!";
            default:
                return "Please select an option";
        }
    };

    return (
        <>
            <Select onChange={handleSelectChange}
                    label="Please select a chart"
                    id="select-chart"
                    options={optionsForSelect}
            />

            { renderData() }
        </>
    )
};

export default DataFetchingContainer;
