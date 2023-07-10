import React, {useEffect, useRef} from "react";
import {initialiseSvg} from "../utils/calcs";

interface svgParams {
    svgId: string
}
export function BasicSvg(params: svgParams){
    let initialised: Boolean = false
    let mySvgRef = useRef<SVGSVGElement | null>(null)

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