import React, {useEffect, useRef} from "react";
import {hardcodedData} from "../data/hardcodedData";
import {randomIntFromInterval} from "../utils/calcs";
import {d3lineChart} from "../utils/d3LinePlot";

const width = window.innerWidth
const height = window.innerHeight

const gdpLineData: number[][] = []
for (let i in hardcodedData) {
    gdpLineData.push([hardcodedData[i].gdp, randomIntFromInterval(1,10)])
}
export function LinePlot(){
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        d3lineChart(svgRef.current,width, height, gdpLineData)
    })
    return(
        <>
            <h1>Line Plot</h1>
            <svg ref={svgRef}></svg>
        </>
    )
}