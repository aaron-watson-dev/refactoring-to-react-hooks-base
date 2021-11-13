import React from "react";
import { Server } from "miragejs"
import {subscriptions} from "./mocks/index";
import {sales} from "./mocks/index";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataFetchingContainer from "./features/Dashboard/DataFetchingContainer"

const App = () => {
   return <DataFetchingContainer/>
};

function chartSelection(props) {

}

new Server({
   routes() {
      this.namespace = "api";
      this.get("/Subscriptions", () => {
         return subscriptions;
      });
      this.get("/Sales", () => {
         return sales;
      });
   }
});

export default App;
