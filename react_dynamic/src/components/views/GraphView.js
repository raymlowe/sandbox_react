import React, { lazy } from "react";
import Chart from "./Chart";
// import { Chart } from "frappe-charts";
import "frappe-charts/dist/frappe-charts.min.css";

// https://github.com/tobiaslins/frappe-charts-react-example
const GraphView = ({ data }) => <Chart title="Graph data" data={data} />;

export default GraphView;
