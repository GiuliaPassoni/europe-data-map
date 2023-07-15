import React, {useEffect, useRef} from "react";
import {initialiseSvg} from "../utils/calcs";

export function BasicSvg(params){
    let initialised = false
    let mySvgRef = useRef(null)

    useEffect(()=>{
        if(!initialised){
            initialised = true
            const svg = initialiseSvg('div#svgContainer', params.svgId, mySvgRef, 500, 100)
            svg.attr('style', 'border: 3px dashed blue')
        }
    }, [])

    return(
        <>
            <div id='svgContainer'></div>
        </>
    )
}