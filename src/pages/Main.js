import React from "react";
import {BarChart} from "../components/BarChart";
import {LinePlot} from "../components/LinePlot";
import {ScatterPlot} from "../components/ScatterPlot";
export function Main(){
    return (
        <>
            <h1>Hello</h1>
            <BarChart/>
            <LinePlot/>
            <ScatterPlot/>
        </>
    )
}