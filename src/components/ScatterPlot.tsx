import React, {useEffect, useRef, useState} from "react";
import {initialiseSvg} from "../utils/calcs";


export function ScatterPlot(){
    const svgRef = useRef<SVGSVGElement | null>(null)
    let initialised: Boolean = false

    useEffect(()=>{
        if(!initialised){
            initialised = true
            let svg = initialiseSvg('#scatterPlotSvgContainer', 'scatterPlotSvg', svgRef.current, 500, 500)
            svg.attr('style', 'border: 2px solid red')
        }
    },[initialised])
    return (
        <>
            <h1>Scatter Plot</h1>
            <div id='scatterPlotSvgContainer'></div>
        </>
    )
}