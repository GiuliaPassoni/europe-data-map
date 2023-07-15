import React, {useEffect, useRef} from "react";
import {hardcodedData} from "../data/hardcodedData";
import {d3barChart} from "../utils/d3BarChart";

const width = window.innerWidth
const height = window.innerHeight

let gdpData = []
for (let i in hardcodedData) {
    gdpData.push({
        countryName: hardcodedData[i].countryName,
        gdp: hardcodedData[i].gdp
    })
}
export function BarChart(){
    const svgRef = useRef(null)
    let initialised = false

    useEffect(() => {
    if(!initialised) {
        initialised = true
        d3barChart(svgRef.current, 800, 500, gdpData)
    }
    },[initialised])
    return(
        <>
            <h1>Bar Chart</h1>
            <div id='barChartSvgContainer'></div>
        </>
    )
}

