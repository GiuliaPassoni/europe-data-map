import React, {useEffect, useRef} from "react";
import {hardcodedData, randomYears} from "../data/hardcodedData";
import {createPointsAndSortByX, randomArray} from "../utils/calcs";
import {d3MultiLineChart} from "../utils/d3MultiLinePlot";

const width = 500
const height = 300

let gdp5years = hardcodedData.map((i)=> ({
    countryName: i["countryName"],
    gdp5yearsData: i["gdp5yearTrend"]
})) //data already sorted by year
console.log('gdp5years', gdp5years)

const margin = {top: 10, right: 30, bottom: 30, left: 60}

export function MultipleLinePlot(){
    const svgRef = useRef(null)
    let initialised = false
    useEffect(() => {
        if(!initialised){
            initialised = true
            d3MultiLineChart(svgRef.current,width, height, margin, gdp5years, 'gdp5yearsData')
        }
    }, [initialised])
    return(
        <>
            <h1>Multiline Plot</h1>
            <svg ref={svgRef}></svg>
        </>
    )
}