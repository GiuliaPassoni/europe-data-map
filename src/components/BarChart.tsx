import React, {useEffect, useRef} from "react";
import {hardcodedData} from "../data/hardcodedData";
import {d3barChart} from "../utils/d3BarChart";

const width = window.innerWidth
const height = window.innerHeight

const gdpBarData: Array<number> = []
for (let i in hardcodedData) {
    gdpBarData.push(hardcodedData[i].gdp * 10)
}
export function BarChart(){
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        // console.log(gdpLineData)
        d3barChart(svgRef.current,width, height, gdpBarData)
        // d3lineChart(svgRef.current,width, height, gdpLineData)
    })
    return(
        <>
            <h1>Bar Chart</h1>
            <svg ref={svgRef}></svg>
        </>
    )
}

