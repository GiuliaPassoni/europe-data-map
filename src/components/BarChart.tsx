import React, {useEffect, useRef} from "react";
import {hardcodedData} from "../data/hardcodedData";
import {d3barChart} from "../utils/d3BarChart";

const width = window.innerWidth
const height = window.innerHeight

const gdpBarData: Array<number> = []
for (let i in hardcodedData) {
    gdpBarData.push(hardcodedData[i].gdp)
}
export function BarChart(){
    const svgRef = useRef<SVGSVGElement | null>(null)
    let initialised: Boolean = false

    useEffect(() => {
    if(!initialised) {
        initialised = true
        d3barChart(svgRef.current, 800, 200, gdpBarData)
    }
    },[initialised])
    return(
        <>
            <h1>Bar Chart</h1>
            <div id='barChartSvgContainer'></div>
        </>
    )
}

