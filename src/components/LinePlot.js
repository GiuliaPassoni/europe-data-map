import React, {useEffect, useRef} from "react";
import {hardcodedData} from "../data/hardcodedData";
import {extractAndSortXData} from "../utils/calcs";
import {d3lineChart} from "../utils/d3LinePlot";

const width = 500
const height = 300

const gdpLineData = extractAndSortXData(hardcodedData, 'birthsPerYear') //note: per se, this isn't a meaningful way to represent comparison gdp data. this
// if anything, it should be a multi-line rep of e.g. the countries' 5-y gdp data

const margin = {top: 10, right: 30, bottom: 30, left: 60}

export function LinePlot(){
    const svgRef = useRef(null)

    useEffect(() => {
        console.log(gdpLineData)
        d3lineChart(svgRef.current,width, height, margin, gdpLineData)
    }, [gdpLineData])
    return(
        <>
            <h1>Line Plot</h1>
            <svg ref={svgRef}></svg>
        </>
    )
}