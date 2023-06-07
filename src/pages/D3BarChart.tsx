// @ts-ignore
import React, {useEffect, useRef} from "react";
import {line, select, Selection, svg} from "d3";
// import initialiseSvg from "../utils/d3code.tsx";
import {hardcodedData} from "./../mockData/hardcodedData.tsx";

import {randomIntFromInterval} from "../utils/d3code.tsx";
import {buildBarChart} from "../utils/d3barChart.tsx";
import {d3lineChart} from "../utils/d3lineChart.tsx";

const width = window.innerWidth
const height = window.innerHeight

const gdpBarData: Array<number> = []
for (let i in hardcodedData) {
    gdpBarData.push(hardcodedData[i].gdp * 10)
}

const gdpLineData: number[][] = []
for (let i in hardcodedData) {
    gdpLineData.push([hardcodedData[i].gdp, randomIntFromInterval(1,10)])
}

// export default function D3code({}: IProps){
export default function D3BarChart() {
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        console.log(gdpLineData)

        buildBarChart(svgRef.current,width, height, gdpBarData)
        d3lineChart(svgRef.current,width, height, gdpLineData)
    })

    return (
        <div className='testDiv'>
            <svg ref={svgRef}></svg>
        </div>
    )
}