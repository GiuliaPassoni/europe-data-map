import React, {useEffect, useRef} from "react";
import {hardcodedData} from "../data/hardcodedData";
import {createPointsAndSortByX, randomArray} from "../utils/calcs";
import {d3lineChart} from "../utils/d3LinePlot";

const width = 500
const height = 300

const gdpLineData = createPointsAndSortByX(hardcodedData, 'birthsPerYear') //note: per se, this isn't a meaningful way to represent comparison gdp data. this
// if anything, it should be a multi-line rep of e.g. the countries' 5-y gdp data

const margin = {top: 10, right: 30, bottom: 30, left: 60}

export function LinePlot(){
    const svgRef = useRef(null)
    let initialised = false
    useEffect(() => {
        if(!initialised){
            initialised = true
            d3lineChart(svgRef.current,width, height, margin, gdpLineData)
        }
    }, [initialised])
    return(
        <>
            <h1>Line Plot</h1>
            <svg ref={svgRef}></svg>
        </>
    )
}