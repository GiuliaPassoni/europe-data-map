import React, {useEffect, useRef, useState} from "react";
import {initialiseSvg} from "../utils/calcs";
import {hardcodedData} from "../data/hardcodedData";
import {d3ScatterPlot} from "../utils/d3ScatterPlot";

const countryLifeSpanData: number[][] = []
for(let i=0; i<hardcodedData.length;i++){
    countryLifeSpanData.push([i+1, hardcodedData[i]["averageLifespan"]])
}
console.log(countryLifeSpanData)

export function ScatterPlot(){
    const svgRef = useRef<SVGSVGElement | null>(null)
    let initialised: Boolean = false

    useEffect(()=>{
        if(!initialised){
            initialised = true
            d3ScatterPlot(svgRef.current, 800,500, countryLifeSpanData)
        }
    },[initialised])
    return (
        <>
            <h1>Scatter Plot</h1>
            <div id='scatterPlotSvgContainer'></div>
        </>
    )
}