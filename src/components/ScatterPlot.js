import React, {useEffect, useRef, useState} from "react";
import {initialiseSvg} from "../utils/calcs";
import {hardcodedData} from "../data/hardcodedData";
import {d3ScatterPlot} from "../utils/d3ScatterPlot";

const countryLifeSpanData = []
for(let i=0; i<hardcodedData.length;i++){
    // countryLifeSpanData.push([i+1, hardcodedData[i]["averageLifespan"]])
    countryLifeSpanData.push({
        countryName: hardcodedData[i].countryName,
        averageLifespan: hardcodedData[i].averageLifespan
    })
}
const margin = {top: 10, right: 30, bottom: 30, left: 60}
export function ScatterPlot(){
    const svgRef = useRef(null)
    let initialised = false

    useEffect(()=>{
        if(!initialised){
            initialised = true
            d3ScatterPlot(svgRef.current, 500,300, countryLifeSpanData, margin)
        }
    },[initialised])
    return (
        <>
            <h1>Scatter Plot</h1>
            <div id='scatterPlotSvgContainer'></div>
        </>
    )
}